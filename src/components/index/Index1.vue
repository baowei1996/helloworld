<template>
    <div class = "container-fluid">
        <div class = "row" style = "height: 300px;margin-left: 20px;margin-right: 20px;margin-top: 30px">
            <div class="col-2" style="height: 260px;margin-left:20px;margin-top: 20px">
                <div style="margin-top:15px">
                    <h5><strong>课程分类</strong></h5>
                </div>
                <div style="margin-top:5px;margin-left:10px">
                    <h5><strong>分类1</strong></h5>
                </div>
                <div style="margin-top:5px;margin-left:10px">
                    <h5><strong>分类2</strong></h5>
                </div>
                <div style="margin-top:5px;margin-left:10px">
                    <h5><strong>分类3</strong></h5>
                </div>
                <div style="margin-top:5px;margin-left:10px">
                    <h5><strong>分类4</strong></h5>
                </div>
                <div style="margin-top:5px;margin-left:10px">
                    <h5><strong>分类5</strong></h5>
                </div>
            </div>
            <div class="col" style="height: 260px;margin-left:20px;margin-right:20px;margin-top:20px">
                <div id="demo" class="carousel slide" data-ride="carousel">
                    <ul class="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" class="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                    </ul>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="/static/image/course_img/course1.jpg" style="height:260px">
                        </div>
                        <div class="carousel-item">
                            <img src="/static/image/course_img/course2.jpg" style="height:260px">
                        </div>
                        <div class="carousel-item">
                            <img src="/static/image/course_img/course3.jpg" style="height:260px">
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#demo" data-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </a>
                    <a class="carousel-control-next" href="#demo" data-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </a>
                </div>
            </div>
            <div class="col-2" style="height: 260px;margin-top:20px;margin-right: 20px">
                <img src="/static/image/course_img/course5.jpg" class="rounded-circle" alt="Cinque Terre"
                         style="margin-left:53px;margin-top:19px;height: 100px;width: 100px">
                <div style="margin-left: 57px;margin-top:15px">
                    <a href="" class="btn btn-primary">我的课程</a>
                </div>
                <div style="margin-left: 57px;margin-top:15px">
                    <a href="/logout/" class="btn btn-primary">登出账号</a>
                </div>
            </div>
        </div>
    </div>
</template>