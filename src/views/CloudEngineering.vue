<template>
    <div>
        <ViewsHeader/>
        <main>
            <article>
                <h2>Cloud Engineering</h2>
                <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan
                tium doloremque laudantium, totam re vitae dicta sunt expli</p>
                
                <p>cabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit 
                tatem sequi nesciunt.</p>
                
                <p>Neque porro quisquam est, qui dolorem ipsum q
                uia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
                eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat</p>                                  
            </article>
            
            <div class="resources">
                <h3 class="heading">Resources</h3>
                <p>modi tempora incidunt ut labore et dolore magnam aliquam</p>
            </div>
            
            <h4 class="heading">Udemy</h4>
                <ul>
                    <li>
                        <a href="https://www.udemy.com/course/flutter-bootcamp-with-dart/"> 
                            <p>The Complete 2021 Flutter Development Bootcamp with Dart</p>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/">
                            <p>Flutter & Dart - The Complete Guide [2021 Edition]</p>
                        </a>
                    </li>
                </ul>
            <h4 class="heading">Websites</h4>
                <ul>
                    <li>
                        <a href="https://flutter.dev/docs/get-started/install">
                            <p>The official webnpage </p>
                        </a>
                    </li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            <h4 class="heading">Youtube</h4>
        </main>
    </div>  
</template>

<script>
import ViewsHeader from './../components/ViewsHeader.vue'
export default {
  name: 'Cloud-Engineering',
  components: {
    ViewsHeader
  }
}
</script>

<style scoped>
     @import './../assets/views.css';
</style>