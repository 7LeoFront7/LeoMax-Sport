export const infoALLStages = [
    [10, 3, 5, 15, 'Новобранец'],
    [15, 5, 7, 20, 'Ученик'],
    [20, 7, 9, 25, 'Начинающий'],
    [30, 10, 13, 35, 'Опытный'],
    [35, 12, 15, 40, 'Продвинутый'],
    [40, 14, 17, 45, 'Профессионал'],
    [50, 17, 21, 55, 'Эксперт'],
    [55, 19, 23, 60, 'Мастер'],
    [60, 21, 25, 65, 'Гуру'],
    [70, 24, 29, 75, 'Виртуоз'],
    [75, 26, 31, 80, 'Великолепный'],
    [80, 28, 33, 85, 'Магистр'],
    [100, 31, 37, 100, 'Легенда']
  ]

export function hideAddressBar() {
  if(!window.location.hash) {
    if(document.height < window.outerHeight)
      document.body.style.height = (window.outerHeight + 50) + 'px';
    setTimeout( function(){ 
        window.scrollTo(0, 1); 
        document.body.style.height = 'auto'; 
      }, 50 );
  }
}