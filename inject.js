(() => {
	// injected DOM script is not a content script anymore,
	// it can modify objects and functions of the page
	const customPushState = window.history.pushState;
	window.history.pushState = function(state, title, url) {
		customPushState.call(this, state, title, url);
		const custEvOptions =
			state && state.hasOwnProperty('as') ? { detail: state.as } : {};

		window.dispatchEvent(new CustomEvent('hkChangedURL', custEvOptions));
	};
	// repeat the above for replaceState too
})();
const $hkURLCD1 = document.querySelector('.hk-urlChangeDetector__1');
document.head.removeChild($hkURLCD1);
