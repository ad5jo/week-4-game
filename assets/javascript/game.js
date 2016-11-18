// Dave Durkee
// 11.14.2016

var o_attacker_img;
var o_defender_img;


$(document).ready(function(){

    $("#npc1").click(function(){
        $("#results").html("You have selected your hero. Now select an enemy.");
        var s_img =  "./assets/images/han.png";
        if (a_game_data.s_state === "choose_hero")
        {
          $("#rest").html("<img src=" + s_img + " width = '75px' "  + " height = '75px' " + ">");
          $("#select_a_hero").html(" ");
          $("#img_han").remove();

          s_img =  "./assets/images/chewy.png";
          $("#en1").html("<img src=" + s_img + " width = '75px' "  + " height = '75px' " + ">");
          $("#img_chewy").remove();

          s_img =  "./assets/images/maul.png";
          $("#en2").html("<img src=" + s_img + " width = '75px' "  + " height = '75px' " + ">");
          $("#img_maul").remove();

          s_img =  "./assets/images/darth.png";
          $("#en3").html("<img src=" + s_img + " width = '75px' "  + " height = '75px' " + ">");
          $("#img_darth").remove();
        } 
    });


    $("#npc2").click(function(){
        $("#results").html("You have selected your hero. Now select an enemy.");
        var s_img =  "./assets/images/chewy.png";
        if (a_game_data.s_state === "choose_hero")
        {
          $("#rest").html("<img src=" + s_img + " width = '75px' "  + " height = '75px' " + ">");
          $("#select_a_hero").html(" ");
          $("#img_chewy").remove();

          s_img =  "./assets/images/han.png";
          $("#en1").html("<img src=" + s_img + " width = '75px' "  + " height = '75px' " + ">");
          $("#img_han").remove();

          s_img =  "./assets/images/maul.png";
          $("#en2").html("<img src=" + s_img + " width = '75px' "  + " height = '75px' " + ">");
          $("#img_maul").remove();

          s_img =  "./assets/images/darth.png";
          $("#en3").html("<img src=" + s_img + " width = '75px' "  + " height = '75px' " + ">");
          $("#img_darth").remove();
        }    
    });


    $("#npc3").click(function(){
        $("#results").html("You have selected your hero. Now select an enemy.");
        var s_img =  "./assets/images/maul.png";
        if (a_game_data.s_state === "choose_hero")
        {
          $("#rest").html("<img src=" + s_img + " width = '75px' "  + " height = '75px' " + ">");
          $("#img_maul").remove();
          $("#select_a_hero").html(" ");
          s_img =  "./assets/images/han.png";
          $("#en1").html("<img src=" + s_img + " width = '75px' "  + " height = '75px' " + ">");
          $("#img_han").remove();

          s_img =  "./assets/images/chewy.png";
          $("#en2").html("<img src=" + s_img + " width = '75px' "  + " height = '75px' " + ">");
          $("#img_chewy").remove();

          s_img =  "./assets/images/darth.png";
          $("#en3").html("<img src=" + s_img + " width = '75px' "  + " height = '75px' " + ">");
          $("#img_darth").remove();

        }    
    });


    $("#npc4").click(function(){
        $("#results").html("You have selected your hero. Now select an enemy.");
        var s_img =  "./assets/images/darth.png";
        if (a_game_data.s_state === "choose_hero")
        {
          $("#rest").html("<img src=" + s_img + " width = '75px' "  + " height = '75px' " + ">");
          $("#img_darth").remove();
          $("#select_a_hero").html(" ");
          s_img =  "./assets/images/han.png";
          $("#en1").html("<img src=" + s_img + " width = '75px' "  + " height = '75px' " + ">");
          $("#img_han").remove();

          s_img =  "./assets/images/chewy.png";
          $("#en2").html("<img src=" + s_img + " width = '75px' "  + " height = '75px' " + ">");
          $("#img_chewy").remove();

          s_img =  "./assets/images/maul.png";
          $("#en3").html("<img src=" + s_img + " width = '75px' "  + " height = '75px' " + ">");
          $("#img_maul").remove();

        }    
    });



    $("#attack_button").click(function(){
        $("#results").html("attack_button clicked with mouse");
        console.log("attack_button clicked with mouse");
        $("#the_image_of_attacker").remove();
        $("#the_image_of_attacker").html("");
        $("#the_image_of_attacker").html('<img id="hans" src="./assets/images/han.png" />');
       
        a_game_data.m_play("a"); // Attack
    });

    $("#play_again_button").click(function(){
        $("#results").html("play_again_button clicked with mouse");
        console.log("play_again_button clicked with mouse");

        $("#the_image_of_defender").html("");
        //$("#the_image_of_defender").html("<img src=" + images[count] + " width='400px'>");
        $("#the_image_of_defender").html('<img id="hans" src="./assets/images/darth.png" />');
        a_game_data.m_play("r"); // restart / play again
    });

    // a_game_data

});

    	// "choose_hero", "choose_enemy", "battle", "won", "lost"


var a_game_data = {
    	s_state : "choose_hero",

    	o_hero : {name : "npc_1", base_attack : 20, hp : 0, attack_value : 0, image : "./assets/images/han.png"}, // 
    	o_enemy : {name : "npc_2", base_attack : 20, hp : 0, attack_value : 0, image : "./assets/images/maul.png"}, // 

    	// ///////////////////////////////////////////////////////////////////////////////////////////////
    	a_npc_list : [
    		o_npc = {name : "npc_1", base_attack : 20, hp : 0, attack_value : 0, image : "./assets/images/han.png"}, 
    		o_npc = {name : "npc_2", base_attack : 20, hp : 0, attack_value : 0, image : "./assets/images/chewy.png"}, 
    		o_npc = {name : "npc_3", base_attack : 20, hp : 0, attack_value : 0, image : "./assets/images/maul.png"}, 
    		o_npc = {name : "npc_4", base_attack : 20, hp : 0, attack_value : 0, image : "./assets/images/darth.png"}, 
    	],

    	// ///////////////////////////////////////////////////////////////////////////////////////////////
        m_reset_for_new_game: function() {
          this.s_state = "choose_hero";
          $("#the_image_of_attacker").remove();
        },

        m_generate_new_npc_stats: function() {
          for (var i = 1; i > 4; i++)
          {
          	
          	i_seed_hp = Math.floor((Math.random() * 5) + 5);
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
      console.log("entered m_play");
		  // "choose_hero", "choose_enemy", "battle","won", "lost"
		  $("#results").html("Game state is " + a_game_data.s_state);
		  console.log("Game state is " + a_game_data.s_state);

		    if (a_game_data.s_state === "choose_hero")
			    {
			    	$("#results").html("Choose a hero");
			    	a_game_data.s_state = func_choose_hero(s_key);
			    }

		    else if (a_game_data.s_state === "choose_enemy")
			    {
			    	$("#results").html("Choose an enemy");
			    	a_game_data.s_state = func_choose_enemy();
			    }

		    else if (a_game_data.s_state === "battle")
			    {
			    	a_game_data.s_state = func_battle(s_key); // 'a' for attack
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
        console.log("leaving m_play");
			}
    
,	// END of m_play: function
		b_dummy: true,
    } // end of a_game_data
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//					END							m_play 							END						//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

function func_choose_hero()
{
  console.log("entered func_choose_hero")
  return "choose_enemy";
}

function func_choose_enemy()
{
  console.log("entered func_choose_enemy")
  return "battle";
}

function func_battle()
{
  console.log("entered func_battle")
  return "won";
}

function func_won()
{
  console.log("entered func_won")
  return "choose_hero";
}

function func_lost()
{
  console.log("entered func_lost")
  return "choose_hero";
}

function func_debug()
{
  console.log("entered func_debug")
  return "choose_hero";
}

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