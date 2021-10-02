<template>
  <div>
    <div v-on:click="cli(title)" class="btna">
      <div :id="title" class="enfeite">
      </div>
      <div @click="router(menuitens.route)" class="btna-header">
        <div class="group-item">
          <i id="itemicon" :class="menuitens.icon"></i>
          <p class="titleitem">{{ title }}</p>
        </div>
        <i v-if="menuitens.sub" class="ad ad-dash titleitem"></i>
        <i v-else class="ad titleitem"></i>
      </div>
    </div>
    <div style="display:none;" :class="'subitem ' + title" v-if="menuitens.sub">
      <div @click="router(subitem.subroute)" v-for="subitem in menuitens.sub" :key="subitem.label" class="sub-subitem">
        <p  class="subtitleitem">{{ subitem.label }}</p>
      </div>
    </div>
  </div>
</template>

<script src="./SideBarItem.js">
</script>

<style lang="scss" scoped>

$colorenfeite:aliceblue;
.enfeite{
  height: 100%;
  width: 2px;
  background-color:$colorenfeite;
}
.titleitem{
  -webkit-user-select: none; 
}
.subtitleitem{
  -webkit-user-select: none;
  margin-left: 10px;
}
.btna{
  background-color: rgba($color: #050405, $alpha: 0.4);
  height: 40px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  //margin-top:7px;
}
.btna:active:hover{
  .enfeite{
    background-color:rgba($color: #F48FB1, $alpha: 0.4);
  }
}
.group-item{
  display: flex;
  height: 100%;
  align-items: center;
}
#itemicon{
  margin-right: 10px;
}
.btna:hover{
  background-color: rgba($color: #000000, $alpha: 0.5);
}
.btna-header{
  margin-left: 10px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
}
.subitem{
  background-color: rgba($color: #201d1d, $alpha: 0.9);
  align-items: center;
}
.sub-subitem{
  width: 100%;
  cursor: pointer;
  height: 40px;
  display: flex;
  align-items: center;
}
.sub-subitem:hover{
  background-color: rgba($color: #000000, $alpha: 0.4);
}
@media screen and (max-width: 992px) {
  .btna-header{
    margin-left: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    .titleitem{
      display: none;
    }
  }
  .group-item{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .sub-subitem{
    width: 150px;
  }
  .subtitleitem{
    margin-left: 50px;
  }
  .btna-header:hover{
  }
  #itemicon{
    margin-left: 10px;
  }
  
}
</style>