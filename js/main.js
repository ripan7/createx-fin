window.addEventListener('DOMContentLoaded', () => {
  // accordion

  const accordeon = document.querySelector('.program__acc'),
        accordeonItems = accordeon.querySelectorAll('.accordeon__item');
  
  accordeonItems.forEach(item => {
    item.addEventListener('click', () => {
      item.querySelector('.accordeon__text').classList.toggle('hidden');
      item.classList.toggle('program__acc-link--active');
    })
  });

  // footer list
  if (window.innerWidth <= 590) {
    const blocks = document.querySelectorAll('.listBlock');

    blocks.forEach(block => {
      console.log(block);
      const title = block.querySelector('.footer__top-title');
      const list = block.querySelector('.footer__top-list');

      title.addEventListener('click', () => {
        list.classList.toggle('show')
      });
    });
  }








  // if (window.innerWidth <= 590) {
  //   const blocks = document.querySelectorAll('.listBlock');

  //   blocks.forEach(block => {
  //     console.log(block)
  //     const title = block.querySelector('.footer__top-title');
  //     const list = block.querySelector('.footer__top-list');

  //     title.addEventListener('click', () => {
  //       list.classList.toggle('show');
  //     });
  //   });
  // }


});