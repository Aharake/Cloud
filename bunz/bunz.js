var allRecipes=[]

var cheeseBurger = {
    title: "Cheese Burger",
    ingredients: ["Ground beef", "Buns", "Lettuce", "Tomato", "Cheese"],
    instructions: [
      "Grill the ground beef.",
      "Toast the buns on the grill or in a toaster.",
      "Assemble the burger by placing the cooked ground beef patty on the bottom bun.",
      "Add a slice of cheese on top of the patty.",
      "Layer lettuce and tomato slices on top of the cheese.",
      "Place the top bun on the ingredients to complete the burger.",
      "Serve and enjoy your delicious Cheese Burger!"
    ],
    image : "cheeseBurger.jpg",
    favorited:false
  };
  
  var veggieBurger = {
    title: "Veggie Burger",
    ingredients: ["Black beans", "Quinoa", "Breadcrumbs", "Red onion", "Garlic", "Spices", "Buns", "Lettuce", "Tomato", "Avocado"],
    instructions: [
      "Mash the black beans in a bowl.",
      "Add cooked quinoa, breadcrumbs, finely chopped red onion, minced garlic, and desired spices to the bowl. Mix well.",
      "Form the mixture into patties and refrigerate for 30 minutes.",
      "Heat oil in a pan and cook the patties on both sides until golden brown.",
      "Toast the buns and assemble the burger with lettuce, tomato, avocado, and the veggie patty.",
      "Enjoy your delicious Veggie Burger!"
    ],
    image: "veggieBurger.jpg",
    favorited:false
  };

  var hawaiianBurger = {
    title: "Hawaiian Burger",
    ingredients: ["Ground beef", "Buns", "Pineapple slices", "Ham", "Swiss cheese", "Lettuce", "Tomato", "Onion", "Teriyaki sauce"],
    instructions: [
      "Shape the ground beef into patties and season with salt and pepper.",
      "Grill or cook the patties in a pan until cooked through.",
      "Grill the pineapple slices until caramelized.",
      "Toast the buns.",
      "Place a slice of Swiss cheese on each patty and let it melt.",
      "Assemble the burger with lettuce, tomato, onion, ham, caramelized pineapple slices, and the cheese-topped patty.",
      "Drizzle teriyaki sauce over the burger.",
      "Enjoy the tropical flavors of the Hawaiian Burger!"
    ],
    image: "hawaiian.jpg",
    favorited:false
  };
  var blueCheeseBurger = {
    title: "Blue Cheese Burger",
    ingredients: ["Ground beef", "Buns", "Blue cheese", "Caramelized onions", "Arugula", "Tomato", "Pickles", "Mayonnaise", "Mustard"],
    instructions: [
      "Shape the ground beef into patties and season with salt and pepper.",
      "Grill or cook the patties in a pan until cooked through.",
      "Caramelize the onions in a separate pan.",
      "Toast the buns.",
      "Crumble blue cheese on each patty.",
      "Spread mayonnaise and mustard on each side of the buns.",
      "Assemble the burger with arugula, tomato, caramelized onions, pickles, and the blue cheese-topped patty.",
      "Enjoy the bold flavors of the Blue Cheese Burger!"
    ],
    image: "blueCheese.jpg",
    favorited:false
  };
  var bbqRanchBurger = {
    title: "BBQ Ranch Burger",
    ingredients: ["Ground beef", "Buns", "Bacon", "Cheddar cheese", "Lettuce", "Tomato", "Onion", "Pickles", "BBQ sauce", "Ranch dressing"],
    instructions: [
      "Cook the bacon until crispy and set aside.",
      "Shape the ground beef into patties and season with salt and pepper.",
      "Grill or cook the patties in a pan until cooked through.",
      "Place a slice of cheddar cheese on each patty and let it melt.",
      "Toast the buns.",
      "Spread BBQ sauce on the bottom bun and ranch dressing on the top bun.",
      "Assemble the burger with lettuce, tomato, onion, pickles, bacon, and the cheese-topped patty.",
      "Enjoy the delicious combination of BBQ and ranch flavors with the BBQ Ranch Burger!"
    ],
    image: "Bacon-Cheeseburger-6.webp",
    favorited:false
  };
  
  var baconCheeseBurger = {
    title: "Bacon Cheese Burger",
    ingredients: ["Ground beef", "Buns", "Bacon", "Cheddar cheese", "Lettuce", "Tomato", "Onion", "Pickles", "Ketchup", "Mustard"],
    instructions: [
      "Cook the bacon until crispy and set aside.",
      "Shape the ground beef into patties and season with salt and pepper.",
      "Grill or cook the patties in a pan until cooked through.",
      "Place a slice of cheese on each patty and let it melt.",
      "Toast the buns and spread ketchup and mustard on each side.",
      "Assemble the burger with lettuce, tomato, onion, pickles, bacon, and the cheese-topped patty.",
      "Serve your mouthwatering Bacon Cheese Burger!"
    ],
    image:"baconCheeseBurger.jpg",
    favorited:false
  };

  var bbqChickenBurger = {
    title: "BBQ Chicken Burger",
    ingredients: [
      "Chicken breast",
      "BBQ sauce",
      "Buns",
      "Lettuce",
      "Tomato",
      "Red onion",
      "Pickles",
      "Cheese (optional)",
      
    ],
    instructions: [
      "Marinate the chicken breast in BBQ sauce for about 30 minutes.",
      "Grill or cook the chicken breast until fully cooked.",
      "Toast the buns.",
      "Assemble the burger by placing the cooked chicken breast on the bottom bun.",
      "Add lettuce, tomato, red onion, pickles, and cheese (if desired) on top of the chicken.",
      "Place the top bun on the ingredients to complete the burger.",
      "Serve and enjoy your flavorful BBQ Chicken Burger!"
    ],
    image: "bbqChicken.webp",
    favorited:false
  };

  var mushroomSwissBurger = {
    title: "Mushroom Swiss Burger",
    ingredients: [
      "Ground beef",
      "Buns",
      "Swiss cheese",
      "Mushrooms",
      "Onion",
      "Garlic",
      "Worcestershire sauce",
      "Lettuce",
      "Tomato",
      "Mayonnaise"
    ],
    instructions: [
      "Sauté the mushrooms, onions, and garlic in a pan until softened.",
      "In a bowl, mix ground beef with Worcestershire sauce, salt, and pepper.",
      "Shape the beef mixture into patties and cook them on a grill or in a pan until desired doneness.",
      "Add a slice of Swiss cheese on top of each patty and let it melt.",
      "Toast the buns.",
      "Spread mayonnaise on the bottom bun and assemble the burger with lettuce, tomato, the mushroom-swiss patty, and the sautéed mushrooms and onions.",
      "Place the top bun on the ingredients to complete the burger.",
      "Serve and enjoy your savory Mushroom Swiss Burger!"
    ],
    image: "mushroomSwiss.jpg",
    favorited:false
  };

  var guacamoleTurkeyBurger = {
    title: "Guacamole Turkey Burger",
    ingredients: [
      "Ground turkey",
      "Buns",
      "Guacamole",
      "Red onion",
      "Tomato",
      "Lettuce",
      "Cilantro",
      "Lime juice",
      "Salt and pepper"
    ],
    instructions: [
      "In a bowl, mix ground turkey with chopped cilantro, lime juice, salt, and pepper.",
      "Shape the turkey mixture into patties and cook them on a grill or in a pan until fully cooked.",
      "Toast the buns.",
      "Spread guacamole on the bottom bun.",
      "Assemble the burger with lettuce, tomato, red onion, and the turkey patty.",
      "Place the top bun on the ingredients to complete the burger.",
      "Serve and enjoy your delicious Guacamole Turkey Burger!"
    ],
    image: "guacamole_bacon_turkey_burgers_with_roasted_poblano_peppers_1.webp",
    favorited:false
  };

  allRecipes.push(cheeseBurger)
  allRecipes.push(veggieBurger)
  allRecipes.push(baconCheeseBurger)
  allRecipes.push(guacamoleTurkeyBurger)
  allRecipes.push(bbqChickenBurger)
  allRecipes.push(mushroomSwissBurger)
  allRecipes.push(hawaiianBurger)
  allRecipes.push(blueCheeseBurger)
  allRecipes.push(bbqRanchBurger)


 var allDisplayed=false;
  var seeAllBtn=document.getElementById('seeAll')
  var favRecipes=[]
  function addToFav(recipeTitle){
     for(var i=0;i<allRecipes.length;i++){
      if(allRecipes[i].title===recipeTitle){
        if(!allRecipes[i].favorited){
        favRecipes.push(allRecipes[i])
        allRecipes[i].favorited=true
        break;
        }else{
          var index=favRecipes.indexOf(allRecipes[i])
          if(index!==-1){
            favRecipes.splice(index,1)
            allRecipes[i].favorited=false;
            var favLogo = document.getElementById('favLogo');
        favLogo.classList.add('favLogoActive');
        favLogo.style.color = 'black';
          }
        }
  
        break;
      }
     }
     console.log(favRecipes)
     if(allDisplayed){
      displayAllRecipes()
     }else{
      displayRecipes()
     }
     
  }
  function displayRecipes(){
    var recipes=document.getElementById('recipes')
    recipes.innerHTML='';
   

    for(var i=0;i<6;i++){
        var recipeHtml='<div class="recipe-box"> '+
        '<div id="box-top">'
        if(favRecipes.includes(allRecipes[i])){
       recipeHtml+=' <span id="favLogo" class="material-symbols-outlined "  onclick="addToFav(\''+allRecipes[i].title+'\')">heart_broken</span>'
        }else{
          recipeHtml+=' <span id="favLogo" class="material-symbols-outlined "  onclick="addToFav(\''+allRecipes[i].title+'\')">favorite</span>'
        }
  
        recipeHtml+='<span id="delLogo" class="material-symbols-outlined" onclick="DelRecipe(\''+allRecipes[i].title+'\')">close</span></div>'+
         '<h2> '+allRecipes[i].title+'</h2>'
         +'<img class="brgrimgs" src="img/'+allRecipes[i].image+'" alt="Image">'+
          '<h4>Ingredients:</h4>'+'<ul>';
           for(var j=0;j<allRecipes[i].ingredients.length;j++){
            recipeHtml+='<li>'+allRecipes[i].ingredients[j]+'</li>';
           }

          recipeHtml+='</ul>'+
          '<h4>Instructions:</h4>'+'<ol>';
           for(var k=0;k<allRecipes[i].instructions.length;k++){
            recipeHtml+='<li>'+allRecipes[i].instructions[k]+'</li>';
           }
          recipeHtml+='</ol>'

         +' </div>';
        recipes.innerHTML+=recipeHtml;
    }
    allDisplayed=false
  }

  function displayAllRecipes(){
    
      var recipes=document.getElementById('recipes')
      recipes.innerHTML='';
      
      for(var i=0;i<allRecipes.length;i++){
        var recipeHtml='<div class="recipe-box"> '+
        '<div id="box-top">'
        if(favRecipes.includes(allRecipes[i])){
       recipeHtml+=' <span id="favLogo" class="material-symbols-outlined "  onclick="addToFav(\''+allRecipes[i].title+'\')">heart_broken</span>'
        }else{
          recipeHtml+=' <span id="favLogo" class="material-symbols-outlined "  onclick="addToFav(\''+allRecipes[i].title+'\')">favorite</span>'
        }
  
        recipeHtml+='<span id="delLogo" class="material-symbols-outlined" onclick="DelRecipe(\''+allRecipes[i].title+'\')">close</span></div>'+
           '<h2> '+allRecipes[i].title+'</h2>'
           +'<img class="brgrimgs" src="img/'+allRecipes[i].image+'" alt="Image">'+
            '<h4>Ingredients:</h4>'+'<ul>';
             for(var j=0;j<allRecipes[i].ingredients.length;j++){
              recipeHtml+='<li>'+allRecipes[i].ingredients[j]+'</li>';
             }
  
            recipeHtml+='</ul>'+
            '<h4>Instructions:</h4>'+'<ol>';
             for(var k=0;k<allRecipes[i].instructions.length;k++){
              recipeHtml+='<li>'+allRecipes[i].instructions[k]+'</li>';
             }
            recipeHtml+='</ol>'
  
           +' </div>';
          recipes.innerHTML+=recipeHtml;
          
    }
    allDisplayed=true;
  }

  displayRecipes();
 
  

  seeAllBtn.addEventListener('click', () => {
    if (allDisplayed) {
    
      seeAllBtn.textContent = 'See All ...';
      displayRecipes();
    } else {
      
      seeAllBtn.textContent = 'See Less ...';
      displayAllRecipes();
    }
  });

  var allMessages=[]

  function getMessage(event){
    event.preventDefault()
    var fullName=document.getElementById('fullname').value;
    var email=document.getElementById('email').value
    var subject=document.getElementById('subject').value
    var message=document.getElementById('message').value
    var missingfield=false;
    if( fullName=='' ||email==''||subject==''||message==''){
      missingfield=true;
    }else{
      missingfield=false
    }

    if(missingfield){
      alert("Missing Field In Contact Form");
      
    }else{
      var msg={
        Name:fullName,
        email:email,
        subject:subject,
        message:message
      }
      allMessages.push(msg)
      console.log(allMessages) 
      clearContactForm();

    }
  }

  function clearContactForm() {
    document.getElementById('fullname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';
    
  }

  var btncontact=document.getElementById('btncontact')
  btncontact.addEventListener('click',getMessage)

  var addrecipebtn=document.getElementById('addbtnnn')
  var addRecipeDiv = document.getElementById('addRecipe')
  


  addrecipebtn.addEventListener('click',(event)=>{
    event.preventDefault()
    addRecipeDiv.style.display='flex';
  })

  var btnCanc=document.getElementById('btCanc')
  btnCanc.addEventListener('click',(ev)=>{
    ev.preventDefault()
    addRecipeDiv.style.display='none';
  })

  function clearRecipeForm() {
    document.getElementById('addTitle').value = '';
    document.getElementById('addInst').value = '';
    document.getElementById('addIngr').value = '';
    document.getElementById('addImg').value = '';
    
  }

  function addBurger(ev){
    ev.preventDefault();
    var title=document.getElementById('addTitle').value;
     var ingrString=document.getElementById('addIngr').value;
     var ingredients=ingrString.split(",");
     var instString=document.getElementById('addInst').value;
     var instructions=instString.split(",");
     var img=document.getElementById("addImg").value;
     
     var missingData=false;
     if(title==''||ingrString==''||instString==''||img==''){
      missingData=true;
     }else {
      missingData=false
     }
     if(missingData){
      alert("Missing Field In Recipe Form"); 
    } else{
      var newRecipe ={
        title:title,
        ingredients:ingredients,
        instructions:instructions,
        image:img,
        favorited:false
      }
      allRecipes.push(newRecipe)
      clearRecipeForm();
      displayRecipes()

    }

  }
  var addRecipeBtn=document.getElementById('addbtn')
  addRecipeBtn.addEventListener('click',addBurger)

  function displaySearchedRecipes(){
    var recipes = document.getElementById('recipes')
    recipes.innerHTML='';

    var searchTerm=document.getElementById('searchbar').value.toLowerCase()

     for(var i=0;i<allRecipes.length;i++){
      var title=allRecipes[i].title.toLowerCase()
      if(searchTerm==''){
        displayAllRecipes()
      }
      else if(title.includes(searchTerm)){
        var recipeHtml='<div class="recipe-box"> '+
        '<div id="box-top">'
        if(favRecipes.includes(allRecipes[i])){
        recipeHtml+=' <span id="favLogo" class="material-symbols-outlined "  onclick="addToFav(\''+allRecipes[i].title+'\')">heart_broken</span>'
        }else{
          recipeHtml+=' <span id="favLogo" class="material-symbols-outlined "  onclick="addToFav(\''+allRecipes[i].title+'\')">favorite</span>'
        }
  
        recipeHtml+='<span id="delLogo" class="material-symbols-outlined" onclick="DelRecipe(\''+allRecipes[i].title+'\')">close</span></div>'+
        '<h2> ' + allRecipes[i].title + '</h2>' +
        '<img class="brgrimgs" src="img/' + allRecipes[i].image + '" alt="Image">' +
        '<h4>Ingredients:</h4>' + '<ul>';

      for (var j = 0; j < allRecipes[i].ingredients.length; j++) {
        recipeHtml += '<li>' + allRecipes[i].ingredients[j] + '</li>';
      }

      recipeHtml += '</ul>' +
        '<h4>Instructions:</h4>' + '<ol>';

      for (var k = 0; k < allRecipes[i].instructions.length; k++) {
        recipeHtml += '<li>' + allRecipes[i].instructions[k] + '</li>';
      }

      recipeHtml += '</ol>' +
        ' </div>';

      recipes.innerHTML += recipeHtml;
    }
  }

  allDisplayed = false;
      }
     
var searchbar=document.getElementById('searchbar')
searchbar.addEventListener('input',displaySearchedRecipes)


function kwFound(element) {
  return (recipe)=> {
    return recipe.ingredients.some(function(ingredient) {
      return ingredient.toLowerCase().includes(element.toLowerCase());
    });
  };
}

function filterRecipes(keyword) {
  var filteredRecipes = allRecipes.filter(kwFound(keyword));
  console.log(filteredRecipes);
   return filteredRecipes;
}

var filterDisplayed=false;

function toggleFilterOptionsss() {
  var filterOptions = document.getElementById('list2');
  filterOptions.style.display = (filterOptions.style.display === 'none') ? 'block' : 'none';
  filterDisplayed=(filterOptions.style.display === 'none') ? false :true;
}



var filtrerLogo=document.getElementById('filterLogo')
filtrerLogo.addEventListener('click',()=>
{ if(filterDisplayed){
  clearRadioSelection()
  toggleFilterOptionsss()
  displayRecipes()
}else{
  clearRadioSelection()
  toggleFilterOptionsss()
}
}
)

var filterRadios = document.querySelectorAll('input[name="filters"]');

function getSelectedRadioButton() {
  var selectedRadioButton = null;

  filterRadios.forEach(function(radio) {
    if (radio.checked) {
      selectedRadioButton = radio;
    }
  });

  return selectedRadioButton;
}
function clearRadioSelection() {
  
  filterRadios.forEach(function(radio) {
    radio.checked = false;
  });
}

var beefNav=document.getElementById('navBeef')
var chickenNav=document.getElementById('navChicken')
var vegNav=document.getElementById('navVeg')

var beefNavVal=document.getElementById('navBeef').textContent
var chickenNavVal=document.getElementById('navChicken').textContent
var vegNavVal=document.getElementById('navVeg').textContent

 function getFilterVal(){
  var val;
  var selectedRb = getSelectedRadioButton();
   val = selectedRb.value;
   
   if(val != 'Beef' && val !='Chicken'&&val!='Favorite'){
    val='Beans'
   }
   return val;
 }

function displayFilteredRecipes(val) {
  var newArr;
  if(val!='Favorite'){
  newArr = filterRecipes(val);
  }else{
    newArr=favRecipes
  }
  var recipes = document.getElementById('recipes');
  recipes.innerHTML = '';

  for (var i = 0; i < newArr.length; i++) {
    var recipeHtml='<div class="recipe-box"> '+
    '<div id="box-top">'
    if(favRecipes.includes(newArr[i])){
   recipeHtml+=' <span id="favLogo" class="material-symbols-outlined "  onclick="addToFav(\''+newArr[i].title+'\')">heart_broken</span>'
    }else{
      recipeHtml+=' <span id="favLogo" class="material-symbols-outlined "  onclick="addToFav(\''+newArr[i].title+'\')">favorite</span>'
    }

    recipeHtml+='<span id="delLogo" class="material-symbols-outlined" onclick="DelRecipe(\''+newArr[i].title+'\')">close</span></div>'+
      '<h2>' + newArr[i].title + '</h2>' +
      '<img class="brgrimgs" src="img/' + newArr[i].image + '" alt="Image">' +
      '<h4>Ingredients:</h4>' +
      '<ul>';
    for (var j = 0; j < newArr[i].ingredients.length; j++) {
      recipeHtml += '<li>' + newArr[i].ingredients[j] + '</li>';
    }

    recipeHtml += '</ul>' +
      '<h4>Instructions:</h4>' +
      '<ol>';
    for (var k = 0; k < newArr[i].instructions.length; k++) {
      recipeHtml += '<li>' + newArr[i].instructions[k] + '</li>';
    }
    recipeHtml += '</ol>' +
      '</div>';
    recipes.innerHTML += recipeHtml;
  }
  allDisplayed = false;
}


 filterRadios.forEach(function(radio) {
  
  radio.addEventListener('change', function(){
    var filVal=getFilterVal()
    displayFilteredRecipes(filVal)
  });
});

vegNav.addEventListener('click',()=>{
  displayFilteredRecipes('Beans')
})
beefNav.addEventListener('click',()=>{
  displayFilteredRecipes('Beef')
})
chickenNav.addEventListener('click',()=>{
  displayFilteredRecipes('Chicken')
})


function DelRecipe(recipeTitle){
  console.log('Deleting :',recipeTitle)
  var ConfDel=window.confirm('Are you sure you want to delete this recipe ?')
 if(ConfDel){
  for(var i=0;i<allRecipes.length;i++){
    if(allRecipes[i].title===recipeTitle){
      if(favRecipes.includes(allRecipes[i])){
        var index=favRecipes.indexOf(allRecipes[i])
        favRecipes.splice(index,1)
      }
     allRecipes.splice(i,1)
     break;
    }
  }
  displayRecipes()
}
}





document.querySelectorAll(".carousel").forEach(carousel =>{
  const items=carousel.querySelectorAll(".carousel-item")
  const buttonsHtml =Array.from(items,() =>{
    return `<span class="carousel-btn"></span>`;
  })


carousel.insertAdjacentHTML("beforeend",`
<div class="carousel-nav"+
 ${buttonsHtml.join("")}
`)

const buttns=carousel.querySelectorAll(".carousel-btn") 
let currIndex=0;
let interval=null;
function showItem(index) {
  items.forEach(item => item.classList.remove("carousel-item-selected"));
  buttns.forEach(button => button.classList.remove("carousel-btn-selected"));

  items[index].classList.add("carousel-item-selected");
  buttns[index].classList.add("carousel-btn-selected");
}

function nextItem() {
  currIndex = (currIndex + 1) % items.length;
  showItem(currIndex);
}

buttns.forEach((button, i) => {
  button.addEventListener("click", () => {
    showItem(i);
    clearInterval(interval); 
    interval=setInterval(nextItem,3000)
  });
});

showItem(currIndex);
 interval = setInterval(nextItem, 3000); 
});

const bar=document.getElementById('bar');
const nav=document.getElementById('navbar');
const close =document.getElementById('close');

if (bar){
    bar.addEventListener('click',() =>{
        nav.classList.add('active')
    })
}

if (close){
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}

var bgLogo=document.getElementById('favBg')
bgLogo.addEventListener('click',()=>{
  displayFilteredRecipes('Favorite')
})