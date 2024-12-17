<template>
  <el-container style="height: 100%">
    <el-aside width="10rem" class="aside-container" >
      <el-menu
        :default-active="menuActive"
        class="aside-menu"
        @select="menuActiveSelect"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-submenu index="/information">
          <template slot="title">
            <span>首页</span>
          </template>
          <el-menu-item index="/information/road">首页一</el-menu-item>
          <el-menu-item index="/information/bridge">首页二</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      menuActive: "",
      menuList: [
        {
          title: "首页",
          index: "/HomePage",
        },
      ],
    };
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.header-container {
  height: 0.8rem;
  background: linear-gradient(180deg, #0966c8 0%, #409eff 100%);
}
.header-content {
  padding: 0 0.12rem;
  color: #fff;
  .logo {
    float: left;
    width: 0.56rem;
    height: 0.56rem;
    // margin-right: 0.1rem;
    margin-top: 0.12rem;
    // background: url("../assets/images/logo.png") no-repeat 0 0;
    // background-size: 0.56rem 0.56rem;
  }
  h1 {
    float: left;

    font-weight: 900;
    font-size: 0.38rem;
    line-height: 0.8rem;
    text-align: left;
    text-indent: 0.1rem;
    letter-spacing: 0.02rem;
  }
  .sys-info {
    float: right;
    font-size: 0.22rem;
    line-height: 0.8rem;
  }
}

.header-menu {
  //   width: 12rem;
  position: absolute;
  top: 0;
  left: 5rem;
  font-weight: 700;
  font-size: 0.22rem;
  color: #ffffff;
  line-height: 0.8rem;
  background: transparent;
}
.aside-container {
  height: 100%;
  background: #fff;
  float: left;
}
.aside-menu {
  font-weight: 500;
  font-size: 0.16rem;
  color: rgba(0, 0, 0, 0.65);
}
.main-content {
  margin: 0.1rem auto;
  width: calc(100% - 0.2rem);
  height: calc(100% - 0.8rem);
  overflow: hidden;
  padding: 0;
  background: #fff;
}
::v-deep {
  .el-col-24 {
    height: 100%;
  }
  .el-main {
    width: calc(100% - 2.92rem);
    height: 100%;
    float: left;
    margin: 0;
    padding: 0;
  }
  .el-menu.el-menu--horizontal {
    border: none;
  }
  .header-menu .el-menu-item {
    // float: left;
    width: 2.7rem;
    height: 0.8rem;
    font-weight: 700;
    font-size: 0.22rem;
    line-height: 0.8rem;
    color: #fff;
    // cursor: pointer;
  }
  .header-menu .el-menu-item.is-active {
    background: #095ab0;
    border: none;
  }
  .el-menu--horizontal > .el-menu-item.is-active {
    border: none;
    color: #fff;
  }

  .header-menu.el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
  .header-menu.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
  .header-menu.el-menu--horizontal > .el-submenu .el-submenu__title:hover {
    color: #fff;
    background-color: #095ab0;
  }
  .header-menu .el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
  .header-menu .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    color: #fff;
    background: #095ab0;
  }
  .aside-menu .el-menu-item {
    width: 100%;
    height: 0.48rem;
    line-height: 0.48rem;
    color: rgba(0, 0, 0, 0.65);
    border: none;
    cursor: pointer;
  }
  .aside-menu .el-menu-item.is-active {
    background: #1783f5;
    color: #ffffff;
  }
  .aside-menu.el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
  .aside-menu.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
  .aside-menu.el-menu--horizontal > .el-submenu .el-submenu__title:hover {
    color: #fff;
    background-color: #1783f5;
  }
  .aside-container::-webkit-scrollbar {
    width: 0;
  }
  .el-breadcrumb {
    width: 100%;
    line-height: 0.48rem;
    font-size: 0.16rem;
    padding-left: 0.08rem;
    background: #fff;
    box-sizing: border-box;
  }
  .el-breadcrumb__inner:first-of-type {
    font-weight: 700;
    color: #303133;
  }
  .el-breadcrumb__inner,
  .el-breadcrumb__item:last-child .el-breadcrumb__inner {
    color: #97a8be;
    cursor: text;
  }
}
</style>
