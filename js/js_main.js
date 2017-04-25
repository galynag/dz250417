function szRashod() {
  var w = document.getElementById('calc_w').value;
  var l = document.getElementById('calc_l').value;
  var h = document.getElementById('calc_h').value/100;

  var rashod = Math.ceil(w*l*h*1000/15);
  // муж сказал, что неправильно просто перевести см в м, нужно еще учесть, что получается кубические метры, т.е. нужно еще *1000

  document.getElementById('out').innerHTML =  rashod + ' мешок (15л)';

  // function () {
  //     rashod = Math.abs(rashod);
  //     rashod %= 100;
  //     if (rashod >= 5 && rashod <= 20) {
  //         document.getElementById('out').innerHTML =  rashod + 'мешков';
  //         console.log(document.getElementById('out').value)
  //     }
  //     rashod %= 10;
  //     if (rashod == 1) {
  //          document.getElementById('out').innerHTML =  rashod + 'мешок';
  //          console.log(document.getElementById('out').value)
  //     }
  //     if (rashod >= 2 && rashod <= 4) {
  //         document.getElementById('out').innerHTML =  rashod + 'мешка';
  //         console.log(document.getElementById('out').value)
  //     }
  //      document.getElementById('out').innerHTML =  rashod + 'мешков';
  //      console.log(document.getElementById('out').value)
  // }

}

// function plural(n, forms) {
// 	return forms[n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2];
// }
