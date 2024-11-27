const exibidor = document.querySelector('#exibir_txt #txt_enviado');
const all = document.getElementsByTagName('chat_screen');
const header_data = document.getElementById('dados_container');
header_data.setAttribute('class', 'top_left');
const inputs_container = document.getElementById('inputs_container');
const tela_de_mensagens = document.getElementById('exibir_txt');
const user_info = document.getElementById('user_info');
user_info.setAttribute('class', 'blind');
var ft = document.getElementById('ft');
const saida = document.getElementById('saida');
var test = true;
const leave_btn = document.querySelector('.bi-three-dots-vertical');
const header = document.querySelector('header');
const dots = document.getElementById('dots');
const area_de_escrita = document.getElementById('area_de_escrita');

function opening(){
    all.style.opacity = '0';
    initial.style.animation = 'opening 3s linear 0s 1';
}

function send(){
    let input1 = document.getElementsByClassName('terminal_de_entrada')[0];
    let input1_value = String(input1.value);
    let input1_value_trim = input1_value.trim();
    let caixa;

    if(input1_value_trim != ''){
        function encaixar(){
            let real_input_value = document.createTextNode(input1_value);
            caixa = document.createElement('div');
            let paragrafo_da_caixa = document.createElement('p');
            const i = document.createElement('i');
            i.setAttribute('class', 'bi bi-check2-circle');
            paragrafo_da_caixa.appendChild(real_input_value);
            caixa.appendChild(paragrafo_da_caixa);
            caixa.appendChild(i);
            exibidor.appendChild(caixa);
            caixa.setAttribute('class', 'caixa');
            input1_value.value = '';
        };
    
        encaixar();
        
        setTimeout(() => {
            caixa.style.marginLeft = '10px';
        }, 400);
    }else{
        console.log('INPUT VAZIO');
    }

    input1.value = '';
};

document.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        send()
    };
});

header_data.addEventListener('click', ()=>{

    header_data.removeAttribute('class', 'top_left');
    header.setAttribute('class', 'expand');
    header_data.setAttribute('class', 'top_center');
    user_info.style.display = 'flex';
    dots.style.marginTop = '20px';
    area_de_escrita.setAttribute('class', 'blind');
    tela_de_mensagens.style.display = 'none';
    area_de_escrita.style.display = 'none';
});

function leave(){

    header.removeAttribute('class', 'expand');
    header_data.removeAttribute('class', 'top_center');
    header_data.setAttribute('class', 'top_left');
    user_info.style.display = 'none';
    dots.style.marginTop = '0px';
    area_de_escrita.removeAttribute('class', 'disappear');
    tela_de_mensagens.style.display = 'grid';
    area_de_escrita.style.display = 'inline-flex';    
    header_data.setAttribute('class', 'top_left');
    
};
