// (() => {
//   const refs = {
//     openMenuBtn: document.querySelector('[data-menu-open]'),
//     closeMenuBtn: document.querySelector('[data-menu-close]'),
//     menu: document.querySelector('[data-menu]'),
//     body: document.querySelector('[body]'),
//   };

//   refs.openMenuBtn.addEventListener('click', toggleModal);
//   refs.closeMenuBtn.addEventListener('click', toggleModal);

//   function toggleModal() {
//     refs.menu.classList.toggle('is-open');
//   }
//   function toggleModal() {
//     refs.menu.classList.toggle('is-hidden');
//     refs.body.classList.toggle('no-scroll');
//   }
// })();
(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    body: document.querySelector('body'),
    menuList: document.querySelector('.mobile-menu-list'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.menuList.addEventListener('click', removeMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
  function removeMenu() {
    refs.menu.classList.add('is-hidden');
    refs.body.classList.remove('no-scroll');
  }
})();
