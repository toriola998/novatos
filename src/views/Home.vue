<template>
    <div>
        <section id="home-page">
            <header>
                <Header/>
            </header>
            <div id="home" > 
                <div class="intro">
                    <div id="description">
                        <h1>Get started with <span style="color: #E63A18;">tech!</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitatio</p>
                        <button>Get Started</button>
                    </div>
                    <img src="./../assets/illustrations/home.svg" id="home-3d"/>
                </div>
                </div>
        </section>

        <section id="boxes">
            <p id="box-header">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
            
            <div class="grid-container">
                <router-link to="/mobile-development">
                    <div class="box">
                        <div class="flex-box">
                            <h3>Mobile development</h3>
                            <img src="./../assets/career-icons/mobile-dev.svg" class="career-icon"/>   
                        </div>
                        <p>Lorem ipsum dolor sit amet, consec tetur adipis cing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                    </div>
                </router-link>

                <router-link to="/frontend-development">
                    <div class="box">
                        <div class="flex-box">
                            <h3>Frontend development</h3>
                            <img src="./../assets/career-icons/front-end.png" class="career-icon"/>   
                        </div>

                        <p>Lorem ipsum dolor sit amet, consec tetur adipis cing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                    </div>
                </router-link>

                <router-link to="/backend-development">
                    <div class="box">
                        <div class="flex-box">
                            <h3>Backend development</h3>
                            <img src="./../assets/career-icons/backend-dev.png" class="career-icon"/>   
                        </div>

                        <p>Lorem ipsum dolor sit amet, consec tetur adipis cing elit, 
                        sed do eiusmod tempor incididunt ut labore et </p>
                    </div>
                </router-link>

                <router-link to="/software-testers">
                     <div class="box">
                        <div class="flex-box">
                            <h3>Software Testers</h3>
                            <img src="./../assets/career-icons/Tester.png" class="career-icon"/>   
                        </div>

                        <p>Lorem ipsum dolor sit amet, consec tetur adipis cing elit, 
                        sed do eiusmod tempor incididunt ut labore et </p>
                    </div>
                </router-link>

                <router-link to="/ui-ux-design">
                    <div class="box">
                        <div class="flex-box">
                            <h3>UI/UX design</h3>
                            <img src="./../assets/career-icons/ui-ux.png" class="career-icon"/>   
                        </div>

                        <p>Lorem ipsum dolor sit amet, consec tetur adipis cing elit, 
                        sed do eiusmod tempor incididunt ut labore et </p>
                    </div>
                </router-link>

                <router-link to="/development-operations">
                    <div class="box">
                        <div class="flex-box">
                            <h3>Development Operations</h3>
                            <img src="./../assets/career-icons/server.png" class="career-icon"/>   
                        </div>

                        <p>Lorem ipsum dolor sit amet, consec tetur adipis cing elit, 
                        sed do eiusmod tempor incididunt ut labore et </p>
                    </div>
                </router-link>

                <router-link to="/product-management">
                    <div class="box">
                        <div class="flex-box">
                            <h3>Product management</h3>
                            <img src="./../assets/career-icons/product-management.png" class="career-icon"/>   
                        </div>

                        <p>Lorem ipsum dolor sit amet, consec tetur adipis cing elit, 
                        sed do eiusmod tempor incididunt ut labore et </p>
                    </div>
                </router-link>

                <router-link to="/machine-learning">
                    <div class="box">
                        <div class="flex-box">
                            <h3>Machine Learning</h3>
                            <img src="./../assets/career-icons/ML.png" class="career-icon"/>   
                        </div>

                        <p>Lorem ipsum dolor sit amet, consec tetur adipis cing elit, 
                        sed do eiusmod tempor incididunt ut labore et </p>
                    </div>
                </router-link>

                <router-link to="/database-administrator">
                    <div class="box">
                        <div class="flex-box">
                            <h3>Database administrator</h3>
                            <img src="./../assets/career-icons/database-admin.png" class="career-icon"/>   
                        </div>

                        <p>Lorem ipsum dolor sit amet, consec tetur adipis cing elit, 
                        sed do eiusmod tempor incididunt ut labore et </p>
                    </div>
                </router-link>

                <router-link to="/data-science">
                    <div class="box">
                        <div class="flex-box">
                            <h3>Data science</h3>
                            <img src="./../assets/career-icons/data-science.png" class="career-icon"/>   
                        </div>

                        <p>Lorem ipsum dolor sit amet, consec tetur adipis cing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore incid</p>
                    </div>
                </router-link>

                <router-link to="/cloud-engineering">
                    <div class="box">
                        <div class="flex-box">
                            <h3>Cloud engineering</h3>
                            <img src="./../assets/career-icons/Cloud-egr.svg" class="career-icon"/>   
                        </div>

                        <p>Lorem ipsum dolor sit amet, consec tetur adipis cing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore incid</p>
                    </div>
                </router-link>
            </div>
        </section>

        <section id="about">
            <div class="flex">
                <img src="./../assets/illustrations/Girl.svg" id="girl"/>
                <div class="about">
                    <h2>About</h2>
                    <p id="about-p">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque 
                    ipsa quae ab illo inventore veritatis et quasi architecto beatae 
                    vitae dicta sunt explicabo Nemo enim ipsam voluptatem quia voluptas 
                    sit aspernatur aut odit aut fugit, sed quia co</p>  
                </div>
            </div>
        </section>

        <section id="articles">
            <h2>Related Articles</h2>
            <div class="grid-container">
                <a href="https://edidiongasikpo.com/how-to-kickstart-a-career-in-tech">
                    <div class="article-box">
                        <h4>How to Kickstart a Career in Tech</h4>
                        <p class="read-article">Read article</p>
                    </div>
                </a>

                <a href="https://toriola.hashnode.dev/hacks-for-downloading-large-video-courses-at-a-low-cost">
                    <div class="article-box">
                        <h4>Hack into downloading your large video...</h4>
                        <p class="read-article">Read article</p>
                    </div>
                </a>

                <a href="https://academy.torilo.ng/building-a-career-in-tech-a-must-in-2021">
                    <div class="article-box">
                        <h4>Building a career in tech: a must in 2021</h4>
                        <p class="read-article">Read article</p>
                    </div>
                </a>

                <a href="https://academy.torilo.ng/building-a-career-in-tech-a-must-in-2021">
                    <div class="article-box">
                        <h4>Building a career in tech: a must in 2021</h4>
                        <p class="read-article">Read article</p>
                    </div>
                </a>
            </div>
        </section>
        <footer>
            <Footer/>
        </footer>    
    </div>
</template>

<script> 
import Header from './../components/Header.vue'
import Footer from './../components/Footer.vue'
export default {
    name: 'Home',
    components: {
        Header,
        Footer,
    },
}
</script>

<style scoped>
    header {
        height: 5rem;
        background-color: #e4e4e4;
    }

    #home-page{
       height: 100vh;
       width: 100%;
       background-color: #e4e4e4;
       color: #111010;
    }

    #home-3d{
        display: none;
    }
    
    h1 {  
        font-weight: 600;
        font-size: 1.7rem;
    }

    #home {
        margin: 7rem 1rem;
    }

    #description>p{
        font-weight: 400; 
        font-size: 12px;
        line-height: 1.5;
        margin-top: -0.8rem;
    }

    button{
        background-color: #e63a18;
        color: #e4e4e4;
        border: none;
        padding: 0.5rem 1rem ;
        margin-top: 0.8rem;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
    }

    #boxes{
        padding-bottom: 3rem;
    }

    #box-header{
        font-size: 16px;
        font-weight: 600;
        text-align: center;
    }

    .box{
        width: 85vw;
        height: 165px;
        border-radius: 10px;
        margin: 2rem auto;
        padding: 0rem 1rem 1rem;
        background-color: #e4e4e4;
        color: #111010;
        cursor: pointer;
        position: relative;
    }

    .flex-item{
        display: flex; 
        padding-top: 1rem;
    }

    .flex-box{
        display: flex; 
    }

    h3{
        width: 100px;
        height: 50px;
    }

    .career-icon {
        width: 45px;
        height: 45px;
        position: absolute;
        right: 1rem;
        top: 1rem
    }

    .box>p, #about-p {
        font-size: 11px;
        font-weight: 500;
    }

    #about{
        line-height: 1.8;
        color: #111010;
        background: linear-gradient(135deg, 
        hsla(0, 0%, 100%, 1) 0%,
        hsla(0, 0%, 89%, 1) 100%, 
        hsla(0, 0%, 89%, 1) 100%);
    }

    .about {
        padding:  0 1.5rem 2rem;
    }

    #girl{
        height: 200px;
        width: 100vw;
    }
        
    h2{
        text-align: center;
    }

    #articles{
        background-color: #fff;
        margin: 3rem 0 5rem;
    }

    h4{
        font-size: 15px;
    }

    .article-box {
        color: #fff;
        width: 85vw;
        height: 130px;
        border-radius: 10px;
        margin: 2rem auto;
        padding: 1px 1rem;
        cursor: pointer;
        position: relative;
        background-color: #5f5d5d;
    }

    .read-article{
        font-size: 12px;
        font-weight: 600;
        position: absolute;
        bottom : 0.2px;
    }

     footer{
        background-color: #e4e4e4;
        color: #111010;
        padding: 0 0 1rem 1rem;
        margin-bottom: 0;
    }

@media screen and (min-width: 750px) {
    #home-page{
        position: relative;
    }

    #home {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: unset;
    }
     
    #description{
        margin-right: 2rem;
    }

    #description {
        width: 310px;
    }

   .intro {
        display: flex;
        justify-content: center;
        align-items: center; 
        /*position: relative;*/
    }

    #home-3d{
        display: block;
        width: 40vw;
        height: 300px;
        /**position: absolute;
        top: 5rem;
        right: 3rem;**/
    }

    h1 {  
        font-size: 1.9rem;
    }

    .grid-container {
        display: grid;
        grid-template-columns: auto auto;
        justify-content: center;
        grid-gap: 25px;
    }

    .box{
        height: 180px;
        width: 32vw;
    }
    
    .box, .article-box{
        margin: auto;
    }

    .article-box {
        width: 30vw;
        height: 140px
    }

    .box>p, #about>p, #description>p{
        font-size: 13px;
    }
        
    #box-header{
        margin: 3rem 0 1.5rem;
    }

    .career-icon {
        top: 1.5rem;
    }

    .flex {
        display: flex;
        justify-content: center;
    } 

    #about-p {
        width: 40vw;
    }

    .about{
        padding-top: 5rem;
    }
        
    #girl{
        height: 400px;
        width: 40vw;
    }
    
    #about>p {
        width: 70vw;
        margin: auto;
    }
    
    h4{
        font-size: 17px;
    }

    h2{
        padding-bottom: 1.2rem;
    }
    } 

@media screen and (min-width: 1030px) { 
    #description{
        margin-right: 3rem;
    }

    #description {
        width: 500px;
    }

    #home-3d{
        width: 500px;
        height: 500px;
    }

    h1 {  
        font-weight: 600;
        font-size: 2.8rem;
    }

    h3{
        width: 80px;
        font-size: 1.4rem;
    }

    .box>p, #about>p, #description>p{
        font-size: 15px;
    }
   
    #description>p{ 
        line-height: 1.8;
        margin-top: -1rem;
    }

    button{
        padding: 1rem 1.5rem ;
        margin-top: 1rem;
        font-size: 15px;
    }

    #box-header{ 
        font-size: 18px;
    }

    #about-p {
        width: 30vw;
        font-size: 15px;
    }

    .about{
        padding-top: 5rem;
    }
        
    #girl{
        height: 400px;
        width: 40vw;
    }

    .grid-container {
        grid-template-columns: auto auto auto;
        grid-gap: 30px;
    }

    .box{
        width: 18vw;
        height: 220px;
    }


    .article-box{
        width: 17vw;
        height: 150px;
    }

    h4{
        font-size: 19px;
    } 
}
</style>