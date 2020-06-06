//So, here, I am trying to achieve the following.
//when the app loads, it already shows a image. 
//on clicking on the image, the next image loads.
//on clicking on the new image, the previous image comes back.
//so, the user keeps on clicking and the image keeps switching between the two images
//simple.

//first, I want to grab the image tag that will display the changing images.
let tempImage1 = document.getElementById('image1');
//now tempImage1 holds a reference to the image tag with the id image1
//now I want to react to the event of the image being clicked on.
//then switch the images
tempImage1.onclick = function() 
{
    //I am getting the source details of the image
    let mySrc = tempImage1.getAttribute('src');
    //I am checkinf if the source is the first image.
    if(mySrc === 'https://assets.codepen.io/3985423/vasile-stancu-DCdLfiBEH2M-unsplashmicrosize.jpg')
    {
      //if it is the first image, then i am changing the source of the image to the next image
      tempImage1.setAttribute ('src','https://assets.codepen.io/3985423/ryan-christodoulou-LDrSJ3cjauY-unsplashmicrosize.jpg');
    }
    else
    {
      //if i am here, that means,the image has already been changed with a previous click.
      //so, I am going to switch back to the first image.
      tempImage1.setAttribute ('src','https://assets.codepen.io/3985423/vasile-stancu-DCdLfiBEH2M-unsplashmicrosize.jpg');
    }
}