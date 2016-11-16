// Dave Durkee
// 11.14.2016

var a_game_data ={
    	s_state = "choose_hero";
    	// "choose_hero", "choose_enemy", "battle", "won", "lost"

    	o_hero = {name : "npc_1", base_attack : 20, hp : 0, attack_value : 0, image : "assets/images/npc_1.jpg"},
    	o_enemy = {name : "npc_2", base_attack : 20, hp : 0, attack_value : 0, image : "assets/images/npc_2.jpg"},
    	// ///////////////////////////////////////////////////////////////////////////////////////////////
    	a_npc_list:[
    		o_npc = {name : "npc_1", base_attack : 20, hp : 0, attack_value : 0, image : "assets/images/npc_1.jpg"}, 
    		o_npc = {name : "npc_2", base_attack : 20, hp : 0, attack_value : 0, image : "assets/images/npc_2.jpg"}, 
    		o_npc = {name : "npc_3", base_attack : 20, hp : 0, attack_value : 0, image : "assets/images/npc_3.jpg"}, 
    		o_npc = {name : "npc_4", base_attack : 20, hp : 0, attack_value : 0, image : "assets/images/npc_4.jpg"}, 
    	],

    	// ///////////////////////////////////////////////////////////////////////////////////////////////

        m_reset_for_new_game: function() {
          this.s_state = "choose_hero";

        },

        m_generate_new_npc_stats: function() {
          for (var i = 1; i > 4; i++)
          {
          	
          	i_seed_hp = Math.floor((Math.random() * 5) + 5;
          	i_hp = Math.floor((Math.random() * 100) + (i_seed_hp * 5));
          	this.a_npc_list[i].o_npc[hp] = i_hp;

          	i_base_attack = Math.floor((Math.random() * 6) + 5);
          	this.a_npc_list[i].o_npc[base_attack] = i_base_attack;
          	this.a_npc_list[i].o_npc[attack_value] = i_base_attack;
          }

        },


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//						BEGIN						m_play 						BEGIN						//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


		m_play: function(s_key) {
		// "choose_hero", "choose_enemy", "battle","won", "lost"
		    if (a_game_data.s_state === "choose_hero")
			    {
			    	a_game_data.s_state = func_choose_hero(s_key);
			    }

		    else if (a_game_data.s_state === "choose_enemy")
			    {
			    	a_game_data.s_state = func_choose_enemy();
			    }

		    else if (a_game_data.s_state === "battle")
			    {
			    	a_game_data.s_state = func_battle();
			    }

		    else if (a_game_data.s_state === "won")
			    {
			    	a_game_data.s_state = func_won();
			    }

		    else if (a_game_data.s_state === "lost")
			    {
			    	a_game_data.s_state = func_lost();
			    }
		    else 
			    {
			    	a_game_data.s_state = func_debug();
			    }


,	// END of m_play: function
		b_dummy: true,
    } // end of a_game_data
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//					END							m_play 							END						//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////



//<!-- ---------------------------------- Event LOOPs begin --------------------------------------- -->
	document.onkeyup = function(event) {

    	a_game_data.m_play(event.key);

    } // end of document.onkeyup

//<!-- ---------------------------------- Event LOOPs end --------------------------------------- -->



   //  if (a_game_data.b_game_over === true)
	  //   {
			// //document.getElementById("press_any_key_to_start").innerHTML = a_game_data.m_assign_a_new_osei;
			// a_game_data.m_reset_for_new_game();
			// document.getElementById("press_any_key_to_start").innerHTML = "Press a letter key";
			// document.getElementById("current_word_data").innerHTML = a_game_data.s_word_hidden;
			// a_game_data.b_game_over = false;
			// stopAudio();
	  //   }

	  //   else if (a_game_data.b_game_over === false)
	  //   {
	  //   	// Update Displey with an OSEI-ism
	  //   	document.getElementById("press_any_key_to_start").innerHTML = a_game_data.m_assign_a_new_osei();
	  //   	if (isLetter(event.key)){
	  //   		myFunction_show_playing();
	  //   		a_game_data.m_play(event.key);
			// }