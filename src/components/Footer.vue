<template>
    <div id="footer">
        <div id="techie">
            <a href="#home-page">
                <h4 id="logo">novatos</h4>
            </a>
            <p>ipsum dolor sit amet, consec</p>
        </div>
        
        <div>
            <div id="author">
                <p>Curated by</p>
                <h4>Toriola Faidat O.</h4>
            </div>
        
            <div id="media-icons">
                <a href="https://twitter.com/FaidatToriola"><img src="./../assets/footerIcons/twitter.svg"/></a>
                <a href="https://www.linkedin.com/in/faidat-toriola-7b672021a/"><img src="./../assets/footerIcons/linkedin.svg"/></a>
                <a href="mailto: faaedah@gmail.com"><img src="./../assets/footerIcons/gmail.svg"/></a>
            </div>
        </div>
        
        <div id="footer-links">
            <a>Open source</a>
            <a>Support</a>
            <a>About</a>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Stick+No+Bills:wght@600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
   
    #logo{
        font-family: 'Stick No Bills', sans-serif;
        color:#e63a18;
        font-size: 2rem;
        margin-bottom: 0;
    }

    p{
        font-family: 'Open Sans', sans-serif;
        font-weight: 400;
    }

   #techie>p {
       margin-top: -5px;
       
   }

   #techie{
       margin-bottom: 2rem;
       padding-top: 0;
   }

    #footer p, #footer a{
        font-size: 13px;
    }

    #author>p{
        margin-bottom: -1.2rem;
    } 

    #media-icons {
        margin-top: -0.8rem;
    }

    #media-icons>a>img {
        width: 20px;
        height: 20px;
        margin-right: 0.4rem ;
    }

    #footer-links {
        margin-top: 2rem;
    }

    #footer-links>a{
        padding-right: 1rem;
    }

@media screen and (min-width: 700px) {
    #footer{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    footer-links {
        margin-top: unset;
    }

    #techie>p, #footer-links>a {
        font-size: 14px;
    }
}

</style>