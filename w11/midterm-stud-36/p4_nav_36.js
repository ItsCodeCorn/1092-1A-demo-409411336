function goPage(index) {
    const p = document.querySelector('#section');
    console.log('p', p);
    switch (index) {
      case 1:
        p.innerHTML = `<iframe src="p1_36/tictactoe_36.html" width="100%" height="700px" > </iframe>`;
        break;
      case 2:
        p.innerHTML = `<iframe src="p2_36/resume_36.html" width="100%" height="700px" > </iframe>`;
        break;
      case 3:
        p.innerHTML = `<iframe src="p3_36/divjsDemo_36.html" width="100%" height="700px" > </iframe>`;
        break;
    }
}