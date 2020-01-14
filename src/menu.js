'use strict';

/**
 * Creates a new ExpandableNavMenu element.
 * @class
 */
class ExpandableNavMenu {
	constructor( list, listId ) {
		this._list = list;
		this._menu = document.createElement( 'nav' );
		this._menuContents = document.createElement( 'div' );
		this._menuToggle = document.createElement( 'button' );
		this._menuTitle = document.createElement( 'h1' );
		this._menuId = `taxonomy-menu-${ listId }`;

		this._appendElements();
		this._setAttributes();

		return this._menu;
	}

	_appendElements() {
		this._list.insertAdjacentElement( 'beforebegin', this._menu );
		this._menu.appendChild( this._menuContents );
		this._menuContents.appendChild( this._menuToggle );
		this._menuContents.appendChild( this._list );
		this._menuToggle.appendChild( this._menuTitle );
		this._menuTitle.appendChild( document.createTextNode( `${ this._list.dataset.menuTitle }s` ) );
	}

	_setAttributes() {
		this._list.classList.add( 'menu-items' );
		this._menu.classList.add( 'menu' );
		this._menuContents.classList.add( 'menu-contents' );
		this._menuToggle.classList.add( 'menu-toggle' );
		this._menuTitle.classList.add( 'menu-title' );

		this._menuToggle.setAttribute( 'aria-haspopup', true );
		this._menuToggle.setAttribute( 'id', this._menuId );
		this._list.setAttribute( 'aria-labelledby', this._menuId );
	}
}

/**
 *
 */
class Expander {
	constructor( menu ) {
		this._menu = menu;
		this._menuContents = this._menu.querySelector( '.menu-contents' );
		this._menuToggleButton = this._menu.querySelector( '.menu-toggle' );
		this._menuTitle = this._menu.querySelector( '.menu-title' );
		this._menuLinks = this._menu.querySelectorAll( 'a' );

		this._expanded = true;
		this._animate = false;
		this._duration = 200;
		this._frameTime = 1000 / 60;
		this._nFrames = Math.round( this._duration / this._frameTime );
		this._opts = {};
		this._collapsed = {};

		this.expand = this.expand.bind( this );
		this.collapse = this.collapse.bind( this );
		this.toggle = this.toggle.bind( this );

		this._calculateScales();
		this._createEaseAnimations();
		this._addEventListeners();

		this.collapse();
		this.activate();
	}

	activate() {
		this._menu.classList.add( 'menu-active' );
		this._menuToggleButton.setAttribute( 'aria-expanded', false );
		this._menuLinks.forEach( ( link ) => {
			link.setAttribute( 'tabindex', -1 );
		} );
		this._animate = true;
	}

	collapse() {
		if ( ! this._expanded ) {
			return;
		}
		this._expanded = false;

		const { x, y } = this._collapsed;
		const invX = 1 / x;
		const invY = 1 / y;

		this._menu.style.transform = `scale(${ x }, ${ y })`;
		this._menuContents.style.transform = `scale(${ invX }, ${ invY })`;

		if ( ! this._animate ) {
			return;
		}

		this._applyAnimation( { expand: false } );
	}

	expand() {
		if ( this._expanded ) {
			return;
		}
		this._expanded = true;

		this._menu.style.transform = `scale(1, 1)`;
		this._menuContents.style.transform = `scale(1, 1)`;

		if ( ! this._animate ) {
			return;
		}

		this._applyAnimation( { expand: true } );
	}

	toggle() {
		if ( this._expanded ) {
			this.collapse();
			return;
		}

		this.expand();
	}

	_addEventListeners() {
		this._menuToggleButton.addEventListener( 'click', this.toggle );
	}

	_applyAnimation( { expand } = this._opts ) {
		this._menu.classList.remove( 'menu-expanded' );
		this._menu.classList.remove( 'menu-collapsed' );
		this._menuContents.classList.remove( 'menu-contents-expanded' );
		this._menuContents.classList.remove( 'menu-contents-collapsed' );

		// Forces a recalc styles here so that the classes take hold.
		window.getComputedStyle( this._menu ).transform; // eslint-disable-line no-unused-expressions

		if ( expand ) {
			this._menu.classList.add( 'menu-expanded' );
			this._menuContents.classList.add( 'menu-contents-expanded' );
			this._menuToggleButton.setAttribute( 'aria-expanded', true );
			this._menuLinks.forEach( ( link ) => {
				link.setAttribute( 'tabindex', 0 );
			} );

			return;
		}

		this._menu.classList.add( 'menu-collapsed' );
		this._menuContents.classList.add( 'menu-contents-collapsed' );
		this._menuToggleButton.setAttribute( 'aria-expanded', false );
		this._menuLinks.forEach( ( link ) => {
			link.setAttribute( 'tabindex', -1 );
		} );
	}

	_calculateScales() {
		const collapsed = this._menuTitle.getBoundingClientRect();
		const expanded = this._menu.getBoundingClientRect();

		this._collapsed = {
			x: collapsed.width / expanded.width,
			y: collapsed.height / expanded.height,
		};
	}

	_createEaseAnimations() {
		// Use existing, if it exists.
		let menuEase = document.querySelector( '.menu-ease' );
		if ( menuEase ) {
			return menuEase;
		}

		menuEase = document.createElement( 'style' );
		menuEase.classList.add( 'menu-ease' );

		const menuExpandAnimation = [];
		const menuExpandContentsAnimation = [];
		const menuCollapseAnimation = [];
		const menuCollapseContentsAnimation = [];

		const percentIncrement = 100 / this._nFrames;

		for ( let i = 0; i <= this._nFrames; i++ ) {
			const step = this._ease( i / this._nFrames ).toFixed( 5 );
			const percentage = ( i * percentIncrement ).toFixed( 5 );
			const startX = this._collapsed.x;
			const startY = this._collapsed.y;
			const endX = 1;
			const endY = 1;

			// Expand animation.
			this._append( {
				percentage,
				step,
				startX,
				startY,
				endX,
				endY,
				outerAnimation: menuExpandAnimation,
				innerAnimation: menuExpandContentsAnimation,
			} );

			// Collapse animation.
			this._append( {
				percentage,
				step,
				startX: 1,
				startY: 1,
				endX: this._collapsed.x,
				endY: this._collapsed.y,
				outerAnimation: menuCollapseAnimation,
				innerAnimation: menuCollapseContentsAnimation,
			} );
		}

		menuEase.textContent = `
		@keyframes menuExpandAnimation {
			${ menuExpandAnimation.join( '' ) }
		}

		@keyframes menuExpandContentsAnimation {
			${ menuExpandContentsAnimation.join( '' ) }
		}

		@keyframes menuCollapseAnimation {
			${ menuCollapseAnimation.join( '' ) }
		}

		@keyframes menuCollapseContentsAnimation {
			${ menuCollapseContentsAnimation.join( '' ) }
		}`;

		document.head.appendChild( menuEase );
		return menuEase;
	}

	_append( {
		percentage,
		step,
		startX,
		startY,
		endX,
		endY,
		outerAnimation,
		innerAnimation,
	} = this._opts ) {
		const xScale = ( startX + ( ( endX - startX ) * step ) ).toFixed( 5 );
		const yScale = ( startY + ( ( endY - startY ) * step ) ).toFixed( 5 );
		const invScaleX = ( 1 / xScale ).toFixed( 5 );
		const invScaleY = ( 1 / yScale ).toFixed( 5 );

		outerAnimation.push( `
			${ percentage }% {
				transform: scale(${ xScale }, ${ yScale });
			}` );

		innerAnimation.push( `
			${ percentage }% {
				transform: scale(${ invScaleX }, ${ invScaleY });
			}` );
	}

	_clamp( value, min, max ) {
		return Math.max( min, Math.min( max, value ) );
	}

	_ease( v, pow = 4 ) {
		v = this._clamp( v, 0, 1 );

		return 1 - Math.pow( 1 - v, pow );
	}
}

function init() {
	const lists = document.querySelectorAll( '.courses-archive-frontmatter [data-collapse-menu="true"]' );

	let i = 1;
	lists.forEach( ( list ) => {
		const menu = new ExpandableNavMenu( list, i );
		new Expander( menu );
		i++;
	} );
}
init();
