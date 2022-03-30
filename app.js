const sections = document.querySelectorAll('.section'); // 'section' クラス
const sectBtns = document.querySelectorAll('.controls'); // 'controls' クラス
const sectBtn = document.querySelectorAll('.control'); // 'control' クラス(各ボタン)
const allSections = document.querySelector('.main-content'); // 'main-content' クラス(body)

function PageTransitions() {
	// ボタンクリック→'active-btn'クラス追加してボタンク活性化
	for (let i = 0; i < sectBtn.length; i++) {
		sectBtn[i].addEventListener('click', function() {
			let currentBtn = document.querySelectorAll('.active-btn');
			currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
			this.className += 'active-btn';
		})
	}

	// ボタンクリック→sectionアクティブ
	allSections.addEventListener('click',(event) => {
		const id = event.target.dataset.id;
		if (id) {
			// 他のボタンクからsectionアクティブを落とす
			sectBtns.forEach((btn)=>{
				btn.classList.remove('active-btn')
			})
			event.target.classList.add('active-btn')

			//他のsectionを隠す
			sections.forEach((section) => {
				section.classList.remove('active')
			})

			//選択したsectionをアクティブ
			const element = document.getElementById(id);
			element.classList.add('active')
		}
	})
}

PageTransitions();