const API = 'c906976df99982660c84ffc6a0751655';

function Exibir()
{
  let Tela= document.getElementById('Tela');
  let texto= '';
  
  let dados= JSON.parse(this.responseText);
  for(i=0;i<dados.results.length;i++)
  { 
      let resultado=dados.results[i];
      if(resultado.overview=="" || resultado.release_date=="")
      {
          continue;
      }
      let data= new Date(resultado.release_date);
      texto=texto + `<div class="Not-Box col-12">
      <img src="https://image.tmdb.org/t/p/original${resultado.poster_path}" alt="${resultado.title}">
      <h4 class="Titulo">${resultado.title}</h4>
      <span class="Dados">Lançamento: ${data.toLocaleDateString ()}</span><br>
      <span class="Texto">
       ${resultado.overview}
        <a class="LerMais"href="https://www.google.com/search?q=${resultado.title}+Filme" target="_blank">Leia mais ...</a>
      </span>
    </div>`
    ;
  };
  
  Tela.innerHTML = texto;
}

function Pesquisar () 
{   document.getElementById('Volt').style.display='block';
    document.getElementById('Tela').style.display='block';
    document.getElementById('Lançamentos').style.display='none';
    document.getElementById('Destaques').style.display='none';
    document.getElementById('Avaliações').style.display='none';
    document.getElementById('Entrevistas').style.display='none';
    document.getElementById('Novidades').style.display='none';

    let query= document.getElementById('PesquisaText').value;
    let xhr= new XMLHttpRequest ();
    xhr.onload=Exibir;
    xhr.open ('GET',`https://api.themoviedb.org/3/search/movie?api_key=${API}&language=pt-br&query=${query}&include_adult=false`);
    xhr.send();
    
}

function Inicial () {
    document.getElementById('Volt').style.display='none';
    document.getElementById('Tela').style.display='none';
    document.getElementById('Lançamentos').style.display='block';
    document.getElementById('Destaques').style.display='block';
    document.getElementById('Avaliações').style.display='block';
    document.getElementById('Entrevistas').style.display='block';
    document.getElementById('Novidades').style.display='block';
}


function Destaques (){
    
    let Desq = document.getElementById('Destaque');
    let texto= '';
    

    let Dados= JSON.parse(this.responseText);
    for(i=0;i<4;i++)
    {
        let Resultado=Dados.results[i];

        if(Resultado.poster_path=="")
        {
            continue;
        }
        let data= new Date(Resultado.release_date);
        
        
        texto=texto + `<div class="card col-6 col-sm-6 col-md-3 col-lg-3" style="width: 18rem;">
            <img src="https://image.tmdb.org/t/p/original${Resultado.poster_path}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title-up">${Resultado.title}</h5>
          <p class="Data">${data.toLocaleDateString()}</p>
          <p class="card-text">Avaliação Média: ${Resultado.vote_average}</p>
        </div>
        <a href="https://www.google.com/search?q=${Resultado.title}+Filme" target="_blank" class="btn btn-warning row">Leia Mais</a>
        </div>
        `
    ;
  };
  Desq.innerHTML = texto;
}



    var xhr1= new XMLHttpRequest ();
    xhr1.onload=Destaques;
    xhr1.open('GET',`https://api.themoviedb.org/3/movie/popular?api_key=${API}&language=pt-br`);
    xhr1.send();
    


document.getElementById("Pesquisar").onsubmit = Pesquisar;
document.getElementById("Volt").onclick= Inicial;


   
  










