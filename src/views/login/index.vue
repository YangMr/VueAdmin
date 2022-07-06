<template>
  <el-row class="h-100 login">
    <el-col :span="12">
      <div class="h-100 d-flex justify-content-center align-items-center flex-column" >
        <h3 class="fs-4">欢迎来到VueAdmin管理系统</h3>
        <div class="wechat my-3">
          <img class="w-100 h-100" src="https://www.markerhub.com/vueadmin/img/MarkerHub.c059bf19.jpg" alt="">
        </div>
        <div class="d-flex justify-content-center align-items-center flex-column">
          <span>公众号 MarkerHub</span>
          <span>扫码二维码，回复【 VueAdmin 】获取登录密码</span>
        </div>
      </div>
    </el-col>
    <el-col :span="1">
      <div class="line"></div>
    </el-col>
    <el-col :span="11">
      <div class=" d-flex h-100 flex-column justify-content-center " >
        <el-form :model="form" label-width="100px" label-position="right">
           <el-form-item label="用户名">
              <el-input v-model="form.username" />
          </el-form-item>
          <el-form-item label="密码">
              <el-input v-model="form.password" />
          </el-form-item>
           <el-form-item label="验证码">
              <el-input v-model="form.password" class="code"/>
              <img class="code-img" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0a%0AHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIy%0AMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAoAHgDASIA%0AAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQA%0AAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3%0AODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWm%0Ap6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEA%0AAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSEx%0ABhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElK%0AU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3%0AuLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD0IU8U%0A0Cue1rx54e8OamNP1S7eGcxiTiFnGCTj7oPpQB04qQCvLNX+Nmj2V8kWm2kmoQcb5gTEB9AwyT9c%0AVNY/G3QbidY57S7t1PG9wCB+RoA9RFPWs6HW9Klh81NRtGTONwmXGc49fXirEOpWM2zy7yB/MGUK%0AyAhhkDj8WA+poAugVIKYuCARyDUg4GT0oAeKkWq8k8MBQSyKhdgq5OMk9B+lPtbmC7gSa3kWSJ1D%0AKy9CCAQfyINAFhakApq1IKAHCpBUE1xBawma4mjhiXq8jBQPxNeefF7xbNpHgGHUNB1NUmlvo4kn%0AtpA3ZmIyMg/doA9NFFY3g27vdQ8GaLfalL5t5c2cU0r7Qu4soboAAOvaigDGAryD4t2tvqnizQNH%0AtoIxf3RAlmCjftZgqgn0GHNewCsmfwppFz4lt/EEkDHUYBhZPMOCMEDK9OMnpQBkt8KfBciBf7H2%0AkDG5biUH/wBCryn4g+F/D2k69YaXoTOlxK4SZHlLgbsbTk9O9ej/ABA+IJ8Ov/ZVin/ExlUbXfgI%0ACcZqj4E0LS9DhfXfEmo2b6hcYYG4lX91g9snrmgDh/iH8PrDwdpGmXVrcXUk9y22VJipCkKCcYA7%0A1peG/hDd61oEGqQ+IfsruN8cYiJG3gg5DDHr07V0PxkleTSbS8tZBLBIEIOCQuDuDfQ7lGag8N+K%0A7rw/4WzfaVcT2skOwsqA5AHRsHj5e57c0Ac3oN745g1Obw7Z+IljmgfZHDdNu3HnABIJB46dBxTp%0A/iR4v8PXq2upoD5Y6K5USAkknnIOT3x9MVZ8HPe+KPG73H2eaCNNxZxtG0bskE4z1APXjGOQeIPi%0AdNaa94yg0jSxKZoiwlbDMGc8kgcn+lAFHTvGUuoeMINe8Vtfm1Q7gttEdmQcrkEjgMBx7CvX28c+%0ADfE2hT6XpviCLT2EOP3kTRNGgG3ClgBnHoSa82+HXiHW/C2tpp2pWE72szBWLIOA2SOccjhm64xk%0A88V6R8Q/BtjrvhmS/wBK02xa58vcJVtwGZDySCACTwMfU+tAHJafdeMtLUjQvHWj6zEv/LC4nHmN%0Aj03cnpjrW14N+LOrX3iltA12wgSdcqzwt0YY4/WvOPCvgzw34o0y4afWW0nUoCQ9vJhh14wpwTx1%0A57Vj+FJn0H4i6e9tF/aJhnwYbc4MmMjA3d+M9aAPT/FM1z8Rfiung9rqWDTLHeZo42xvK4yT6nt7%0AVzvxh8FQeC7Swi0q4nGl3UhY20khcLKoxuGfZjVPUfFNx4Y+KDeI4tOu4JJvmmtr6EwyEn7w54x0%0A6E074qeKdZ8X6Xpmo3OjSafpayFITI2d7kZP6D9KAPpbw7CIPDWlQgYEdnCo/BAKKk0JxJoGmyDo%0A1rEw/FRRQBza09aKKAMLX/A+geJ5RNqdkHuAuxZkYqwHOOnXr3rItPg/4Rt5d72s8/Odskxx39Me%0Av6UUUAP+IvhC51/QLax0q3QNEAisH27FGMKRj5kP5ghT2Nbfg/QZtP8ACNnp+rBbiVUUukyq20gD%0A5c45wc4PXGPSiigDbh0i0tbWWKyhjtmdNodVyRwAOvXAA49q5/RPhtomkaq+qNEJruTcZABtiJPH%0AEeSOnqTzzxRRQB1K6RpwvPtn2G3+0bSok8pdwB64OOM8Z9cD0rQVQFCgAADAAoooA5nVfh34c1jU%0AhqE9iqXWcs8fy7+Vzn8Fx+Jotfhn4Wtdem1mPT/9LlJP+sbYuRg4XOOcmiigDq7qxtNQt2t721hu%0AYG6xzRh1P4HisPTvh74Y0vUZbyx0xYPOQpLbq7eRIDjrETt7elFFAHUQQxwQpDDGscUahURBhVA4%0AAAHQUUUUAf/Z" alt="">
          </el-form-item>
          <el-form-item>
              <el-button type="primary" @click="onSubmit">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </el-row>
</template>

<script setup>

import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
  username: ''
})

const onSubmit = () => {
  console.log('submit!')
}

</script>
<style scoped lang='scss'>
.login{
  background-color : #fafafa;
}
.wechat{
  width : 180px;
  height : 180px;
}
.line{
  width : 1px;
  height : 200px;
  background-color : #eee;
  margin-top :250px;
}
.el-form{
  width : 410px;

  .el-input{
    height : 40px;
  }

  .code{
    width :175px;
    margin-right :10px;
  }

  .code-img{
    border-radius :4px;
  }
}
</style>
