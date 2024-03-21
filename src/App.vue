<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" :mobile-breakpoint="768" app>
      <v-img
        src="mountains.png"
        height="171"
        gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        class="pa-4 pt-6"
      >
        <v-avatar size="70" class="mb-2">
          <img src="avatar.JPG" alt="avatar" />
        </v-avatar>
        <div class="white--text text-subtitle-1 font-weight-bold">
          user name
        </div>
        <div class="white--text text-subtitle-2">user_name</div>
      </v-img>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
      src="mountains.png"
      prominent
      height="170"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>
      <v-container class="header-container pa-0">
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <search />
        </v-row>
        <v-row>
          <v-toolbar-title class="text-h4 ml-4">{{$store.state.appTitle}}</v-toolbar-title>
        </v-row>
        <v-row>
          <live-date-time />
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
      <snackbar />
    </v-main>
  </v-app>
</template>
  
  <script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: "Todo", icon: "mdi-format-list-checks", to: "/" },
      { title: "About", icon: "mdi-help-box", to: "/about" },
    ],
  }),
  mounted(){
    this.$store.dispatch('getTasks')
  },
  components: {
    //keep key names correct
    search: require("@/components/Tools/Search.vue").default,
    "live-date-time": require("@/components/Tools/LiveDateTime.vue").default,
    snackbar: require("@/components/Shared/Snackbar.vue").default,
  },
};
</script>

<style lang="sass">
.header-container
    max-width: none !important
</style>