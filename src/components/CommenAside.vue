<template>
  <el-menu
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd045"
  >
    <h3 style="color: #fff; text-align: center" v-show="!isCollapse">
      通用后台管理系统
    </h3>
    <h3 style="color: #fff; text-align: center" v-show="isCollapse">通用</h3>

    <el-menu-item
      :index="item.path"
      v-for="item in noChildren"
      :key="item.path"
      @click="clickMenu(item)"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>

    <el-submenu
      :index="item.label"
      v-for="item in hasChildren"
      :key="item.path"
    >
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item
          :index="subItem.path"
          v-for="(subItem, subIndex) in item.children"
          :key="subIndex"
          @click="clickMenu(item)"
        >
          <i :class="'el-icon-' + subItem.icon"></i>
          <span slot="title">{{ subItem.label }}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>

  </el-menu>
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  /* min-height: 100%; */
  height: 910px;
}
</style>


<script>
export default {
  data() {
    return {
      menu: [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "Home/home",
        },
        {
          path: "/mall",
          name: "mall",
          label: "商品管理",
          icon: "video-play",
          url: "MallManerge/mallManerge",
        },
        {
          path: "/user",
          name: "user",
          label: "用户管理",
          icon: "user",
          url: "UserManerge/userManerge",
        },
        {
          label: "其他",
          icon: "location",
          children: [
            {
              path: "/page1",
              name: "page1",
              label: "页面1",
              icon: "setting",
              url: "Other/pageOne",
            },
            {
              path: "/page2",
              name: "page2",
              label: "页面2",
              icon: "setting",
              url: "Other/pageTwo",
            },
          ],
        },
      ],
    };
  },
  methods: {
    // handleOpen(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    // handleClose(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    clickMenu(item) {
      this.$router.push({ name: item.name });
      this.$store.commit("selectMenu", item);
    },
  },
  computed: {
    noChildren() {
      return this.menu.filter((item) => !item.children);
    },
    hasChildren() {
      return this.menu.filter((item) => item.children);
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    },
  },
};
</script>
