const featuresLinks = document.querySelectorAll('.features-link')
const items = document.querySelectorAll('.item')
const arrows = document.querySelectorAll('.arrow')
const hamburger = document.querySelector('#hamburger')
const nav = document.querySelector('.nav')
const navRight = document.querySelector('.nav-right')
const form = document.querySelector('.footer-form')
const inputCont = document.querySelector('.input-cont')
const input = document.querySelector('.footer-input')
const contact = document.querySelector('.contact')

featuresLinks.forEach(link => {
    link.onclick = () => {
        featuresLinks.forEach(l => l.classList.remove('active-features-link'))
        link.classList.add('active-features-link')
        items.forEach(item => item.style.display = 'none')
        document.querySelector(`.item-${link.dataset.index}`).style.display = 'flex'
    }
})

arrows.forEach(arrow => {
    arrow.onclick = () => {
        arrow.classList.toggle('active-arrow')
    }
})

hamburger.onclick = () => {
    hamburger.classList.toggle('active-hamburger')
    nav.classList.toggle('active-nav')
    navRight.classList.toggle('active-nav-right')
}

form.onsubmit = () => {
    // alert('form submited')
    const email = input.value
    if(isEmail(email)){
        console.log('valid')
    }
    else{
        const p = document.createElement('p')
        p.innerText = 'Woops, make sure it\s an email'
        p.style.cssText = `
            width: 100%;
            padding: 8px;
            background-color: var(--Soft-Red);
            font-size: 14px;
            color: white;
            text-aligh: left !important;
            margin:0;
        `
        inputCont.style.cssText = `
            outline: 2px solid var(--Soft-Red);
            border-radius: 4px;
        `
        inputCont.appendChild(p)
    }
    input.value = ''
    return false
}

/**
 * verifie si la chaine renseigné est un email
 * check if email is valide
 * @param string emailAdress
 * @return bool
 */
function isEmail(emailAdress){
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailAdress.match(regex)) 
    return true; 

   else 
    return false; 
}

//see https://regexr.com/3e48o for another exemple