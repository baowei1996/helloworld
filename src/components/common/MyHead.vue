<template>
    <div class="container-fluid">
        <div id="head" class="row" style="align-items: center;">
            <div id="logo" class="col-4">
              <router-link class="nav-link" to='/'><img id="logo" alt="logo" src="../../assets/logo.png"></router-link>
            </div>
            <div id="searchBar" class="col-4">
                <div id="search" class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="想要搜索的课程">
                    <div class="input-group-append">
                      <input type="submit" class="btn btn-info" value="搜索">
                    </div>
                </div>
            </div>
            <div id="userCenter" class="col-4">
                <div class="d-flex" style="align-items: baseline;">
                    <router-link to='/user'><p style="flex-grow: 2;">{{user.realName}}</p></router-link>
                    <div style="flex-grow: 1;"><img alt="avatar" :src='user.avatarUrl' width="75"></div>
                </div>
            </div>
          </div>
    </div>
</template>

<script>
export default {
    name:"MyHead",
    data(){
        return {
            user:{
                avatarUrl : 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2491588266,1963864761&fm=26&gp=0.jpg',
                realName: '鲍伟'
            }
        }
    },
    created(){
        // fetch('http://www.mocky.io/v2/5df9db5f360000a366bd6764')
        // .then(response => response.json())
        // .then(json=>{
        //     this.user = json
        // })
    }
}
</script>
