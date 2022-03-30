const sections = document.querySelectorAll('.section'); // 'section' クラス
const sectBtns = document.querySelectorAll('.controls'); // 'controls' クラス
const sectBtn = document.querySelectorAll('.control'); // 'control' クラス(各ボタン)
const allSections = document.querySelectorAll('.main-content'); // 'main-content' クラス(body)

function PageTransitions() {
	// ボタンクリック→アクティブ
	for (let i = 0; i < sectBtn.length; i++) {
		sectBtn[i].addEventListener('click', function() {
			let currentBtn = document.querySelectorAll('.active-btn');
			currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
			this.className += 'active-btn';
		})
	}
}

PageTransitions();