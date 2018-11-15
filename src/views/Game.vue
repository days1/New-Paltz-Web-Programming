<template>
<<<<<<< HEAD
<div class="container">
=======
<div>
>>>>>>> 4f727c37e4eea66f924e1fd2d530e4c7b5f8b455
    <div class="alert alert-success">
        Yay we have a game!
    </div>

    <div class="row">
        <div class="col-md-4">
            <div class="card" >
                    <h5 class="card-header">
                        Players
                        <a @click.prevent="login" class="btn btn-sm btn-primary" :class="{disabled: playerId() !== null}">+</a>
<<<<<<< HEAD
                        <span v-if="playerId() !== null">(Welcome {{state.players[playerId()].name}})</span>
=======
                        <i v-if="playerId() !== null">(Welcome {{state.players[playerId()].name}})</i>
>>>>>>> 4f727c37e4eea66f924e1fd2d530e4c7b5f8b455
                    </h5>
                    <ul class="list-group list-group-flush">
                        <li v-for="p in state.players" :key="p.id"
                            class="list-group-item">
                            <img />
                            <h5>{{p.name}}</h5>
<<<<<<< HEAD
                            <span v-if="p.id == state.dealerId" class="badge badge-success">Dealer</span> &nbsp;
=======
                            <span v-if="p.id == state.dealerId" class="badge badge-success">
                                Dealer
                            </span> &nbsp;
>>>>>>> 4f727c37e4eea66f924e1fd2d530e4c7b5f8b455
                            <span class="badge badge-primary badge-pill">{{p.score}}</span>
                        </li>
 
                    </ul>
            </div>
            <div class="card" >
                <h5 class="card-header">My Captions</h5>
                <ul class="list-group list-group-flush">
<<<<<<< HEAD
                    <li v-for="c in myCaptions" :key="c" 
=======
                    <li v-for="c in myCaptions" :key="c"
>>>>>>> 4f727c37e4eea66f924e1fd2d530e4c7b5f8b455
                        @click.prevent="submitCaption(c)"
                        class="list-group-item">{{c}}</li>
                </ul>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card" >
                <img class="card-img" :src="state.picture.url" :alt="state.picture.name">
                <a @click.prevent="flipPicture" class="btn btn-primary">Flip Picture</a>

            </div>
        </div>
        <div class="col-md-4">
            <div class="card" >
                <h5 class="card-header">Played Captions</h5>
                <ul class="list-group list-group-flush">
<<<<<<< HEAD
                    <li v-for="c in state.playedCaptions" :key="c.text" 
                        class="list-group-item" :class="{'list-group-item-warning' : c.isChosen}">{{c.text}}
                        <a  v-if="isDealer"
                            @click.prevent="chooseCaption(c)"
                            class="btn btn-primary btn-sm">Choose</a>
                        <span class="badge" :class="c.playerName ? 'badge-success' : 'badge-secondary'">{{c.playerName || 'Hidden'}}</span>
=======
                    <li v-for="c in state.playedCaptions" :key="c.text"
                        class="list-group-item" :class="{ 'list-group-item-warning' : c.isChosen }">
                        {{c.text }}
                        <a  v-if="isDealer"
                            @click.prevent="chooseCaption(c)"
                            class="btn btn-primary btn-sm">Choose</a>
                        <span class="badge" :class="c.playerName ? 'badge-success' : 'badge-secondary'">
                            {{c.playerName || 'Hidden'}}
                        </span>
>>>>>>> 4f727c37e4eea66f924e1fd2d530e4c7b5f8b455
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss">
    li.list-group-item {
        display: flex;
        align-items: center;
<<<<<<< HEAD
        flex-wrap: wrap;
        justify-content: space-between;
=======
        justify-content: space-between;
        flex-wrap: wrap;
>>>>>>> 4f727c37e4eea66f924e1fd2d530e4c7b5f8b455
        img {
            width: 30px; height: 30px;
            margin-right: 5px;
        }
        h5 {
            flex-grow: 1;
        }
    }
</style>

<script>
import * as api from '@/services/api_access';
import * as fb from '@/services/facebook';
let loopTimer = null;

export default {
<<<<<<< HEAD
    data: function(){
=======
    data(){
>>>>>>> 4f727c37e4eea66f924e1fd2d530e4c7b5f8b455
        return {
            state: {
                picture: "",
                players: [],
                playedCaptions: [],
            },
<<<<<<< HEAD
            myCaptions: []
        }
    },
    created: function(){
=======
            myCaptions: [],
        }
    },
    created(){
>>>>>>> 4f727c37e4eea66f924e1fd2d530e4c7b5f8b455
        loopTimer = setInterval(this.refresh, 1000);
        if(api.playerId !== null && this.myCaptions.length == 0){
            api.GetMyCaptions().then(x=> this.myCaptions = x);
        }
    },
    methods: {
        refresh(){
            api.GetState()
            .then(x=> this.state = x)
        },
        flipPicture(){
<<<<<<< HEAD
            api.FlipPicture();
        },
        login() {
            fb.FBLogin();
            // .then(()=> api.GetMyCaptions().then(x=> this.myCaptions = x))
=======
            api.FlipPicture()
        },
        login() {
            fb.FBLogin();
            //.then(()=> api.GetMyCaptions().then(x=> this.myCaptions = x) )
>>>>>>> 4f727c37e4eea66f924e1fd2d530e4c7b5f8b455
        },
        submitCaption(c){
            api.SubmitCaption(c)
            .then(x=> {
<<<<<<< HEAD
                this.myCaptions.splice(this.myCaptions.indexOf(c), 1)
                this.myCaptions.push(x[0])
=======
                this.myCaptions.splice(this.myCaptions.indexOf(c), 1);
                this.myCaptions.push(x[0]);
>>>>>>> 4f727c37e4eea66f924e1fd2d530e4c7b5f8b455
            })
        },
        chooseCaption(c){
            api.ChooseCaption(c)
        },

        playerId: ()=> api.playerId
    },
<<<<<<< HEAD
    computed:{
        isDealer(){
            return this.playerId() == this.state.dealerId
=======
    computed: {
        isDealer(){
            return this.playerId() == this.state.dealerId;
>>>>>>> 4f727c37e4eea66f924e1fd2d530e4c7b5f8b455
        }
    }
}
</script>
