<template>
    <div class="container">
            <div class="row">
                <!-- 侧边栏 -->
                <div class="col-3">
                    <img src="../../assets/course_img.png" style="width: 100%;">
                        <ul class="nav nav-tabs flex-column" role="tablist">
                                <li class="nav-item">
                                  <a class="nav-link active" data-toggle="tab" href="#gonggao">公告</a>
                                </li>
                                <li class="nav-item">
                                  <a class="nav-link" data-toggle="tab" href="#course_list">课件</a>
                                </li>
                                <li class="nav-item">
                                  <a class="nav-link" data-toggle="tab" href="#menu2">Menu 2</a>
                                </li>
                            </ul>
                </div>
                <!-- 展示块 -->
                <div class="col-8">
                        <div class="tab-content">
                                <Gonggao></Gonggao>
                                <Contents :pages="pages"></Contents>
                                <div id="menu2" class="container tab-pane fade"><br>
                                  <h3>Menu 2</h3>
                                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                </div>
                              </div>
                </div>
            </div>
        </div>
</template>

<script>
import Contents from '../common/Contents'
import Gonggao from './Gonggao'

export default {
    name : 'StudyPanel',
    components:{
        Gonggao,Contents
    },
    data(){
      return{
        pages: ['第一课','第二课','第三课','第四课']
      }
    }
}
</script>