
// Função pra mostrar o conteúdo do Inicio

function mostrarHome() {
    const Menu = document.getElementById("itensmain1");
    const aboutContent = document.getElementById("aboutContent");
    const projectsContent = document.getElementById("projectsContent");

    if (Menu.style.display ==="none") {
        Menu.style.display = "block";
        projectsContent.style.display ="none";
        aboutContent.style.display ="none";
        articlesContent.style.display ="none";
        
    } else {
        
    }

}


// Função pra mostrar o conteúdo do Sobre

function mostrarAbout() {
    const aboutContent = document.getElementById("aboutContent");
    const Menu = document.getElementById("itensmain1");
    const Img = document.getElementById("imgdono");

    if (aboutContent.style.display === "none") {
        aboutContent.style.display = "block";
        Menu.style.display = "none";
        Img.style.width = "500px";
        projectsContent.style.display ="none";
        articlesContent.style.display = "none";
        
        

    } else {
        aboutContent.style.display = "none";
        Menu.style.display = "block";
        Img.style.width = "500px";
        projectsContent.style.display ="none";
        articlesContent.style.display = "none";
        
       
        
    }
}


// Função pra mostrar o conteúdo do Projetos

function mostrarProjects() {
    const projectsContent = document.getElementById("projectsContent");
    const Menu = document.getElementById("itensmain1");
    const Img = document.getElementById("imgdono");

    if (projectsContent.style.display === "none") {
        projectsContent.style.display = "block";
        Menu.style.display = "none";
        Img.style.width = "500px";
        aboutContent.style.display ="none";
        articlesContent.style.display = "none";

    } else {
        projectsContent.style.display = "none" 
        Menu.style.display ="block"
        aboutContent.style.display ="none";
        articlesContent.style.display = "none";
    }
}

// Função pra mostrar o conteúdo do Artigos


function mostrarArticles (){
    const articlesContent = document.getElementById("articlesContent");
    const Menu = document.getElementById("itensmain1");

    if (articlesContent.style.display ==="none") {
        articlesContent.style.display = "block"
        Menu.style.display = "none";
        aboutContent.style.display = "none";
        projectsContent.style.display = "none" 

    } else {
        Menu.style.display = "block";
        articlesContent.style.display = "none"        
    }
}



// Hamburguer

function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }