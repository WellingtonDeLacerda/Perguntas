function clicar1() {
    let i1 = window.document.getElementsByTagName('img')[1]
    
    let pa1 = window.document.getElementsByTagName('p')[0]
    if(pa1.style.display === 'block' || pa1.style.display === '') {
        pa1.style.display = 'none'
        i1.setAttribute('src','ativos/imagens/icon-plus.svg')
    }else {
        
        pa1.style.display = 'block'
        i1.setAttribute('src','ativos/imagens/icon-minus.svg')
    }
    
  }

function clicar2() {
    let i2 = window.document.getElementsByTagName('img')[2]
    let pa2 = window.document.getElementsByTagName('p')[1]
    
    
     i2.setAttribute('src','ativos/imagens/icon-minus.svg')
     if(pa2.style.display === 'none' || pa2.style.display === '') {
        pa2.style.display = 'block'
        i2.setAttribute('src','ativos/imagens/icon-minus.svg')
    }else {
        pa2.style.display = 'none'
        i2.setAttribute('src','ativos/imagens/icon-plus.svg')
    }
}
function clicar3() {
    let i3 = window.document.getElementsByTagName('img')[3]
    let pa3 = window.document.getElementsByTagName('p')[2]
   
    
     i3.setAttribute('src','ativos/imagens/icon-minus.svg')
     if(pa3.style.display === 'none' || pa3.style.display === '') {
        pa3.style.display = 'block'
        i3.setAttribute('src','ativos/imagens/icon-minus.svg')
    }else {
        pa3.style.display = 'none'
        i3.setAttribute('src','ativos/imagens/icon-plus.svg')
    }
}
function clicar4() {
    let i4 = window.document.getElementsByTagName('img')[4]
    let pa4 = window.document.getElementsByTagName('p')[3]
   
    
     i4.setAttribute('src','ativos/imagens/icon-minus.svg')
     if(pa4.style.display === 'none' || pa4.style.display === '') {
        pa4.style.display = 'block'
        i4.setAttribute('src','ativos/imagens/icon-minus.svg')
    }else {
        pa4.style.display = 'none'
        i4.setAttribute('src','ativos/imagens/icon-plus.svg')
    }
}
