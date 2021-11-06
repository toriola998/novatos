<template>
    <div>
        <div class="container">
            <section class="outer">
                <div class="modal">
                    <ViewsHeader/>
                    <div class="content">
                        <h3>Hello there!👋</h3>
                        <p> If you're a VueJs developer and would like to contribute to 
                        this project, <span><a class="orange" href="https://github.com/toriola998/novatos">Click here.</a>
                        </span></p>
                        <p>You don't write vue?, But you're in tech; Of course you can still contribute <span><a class="orange" href="https://docs.google.com/forms/d/1yVTL2T6aZEdLUpMpeizI0IHLYU8eo8OZJVZRyy7YkIg/edit">here</a></span></p>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import ViewsHeader from '../components/ViewsHeader.vue'
export default {
    name: 'open-source',
    components: {
    ViewsHeader
  }
}
</script>

<style scoped>
.outer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
}

.modal {
  width: 360px;
  height: 360px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 10px;
  background-color: #e4e4e4;
}

h3 {
  text-align: center;
  padding-top: 2rem;
}

.content {
  margin:  1rem;
}

.orange {
  color: #e63a18;
  font-weight: 900;
}
</style>