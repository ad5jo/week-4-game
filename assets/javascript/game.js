// Dave Durkee
// 11.14.2016

var o_attacker_img;
var o_defender_img;


$(document).ready(function(){
//mod_test();
//sort_media();

    $("#npc1").click(function(){
        //$("#results").html("You have selected your hero. Now select an enemy. " + a_game_data.s_state);
        var s_img =  "./assets/images/han.png";
        if (a_game_data.s_state === "choose_hero")
        {
          $("#rest").html("<img src=" + s_img + " width = '75px' "  + " height = '75px' " + ">");
          $("#select_a_hero").html(" ");
          $("#img_han").remove();
          $("#npc1").html("");


          s_img =  "./assets/images/chewy.png";
          $("#en1").html("<img src=" + s_img + " width = '75px' "  + " height = '75px' " + ">");
          $("#img_chewy").remove();
          $("#npc1").html("");

          s_img =  "./assets/images/maul.png";
          $("#en2").html("<img src=" + s_img + " width = '75px' "  + " height = '75px' " + ">");
          $("#img_maul").remove();
          $("#npc1").html("");

          s_img =  "./assets/images/darth.png";
          $("#en3").html("<img src=" + s_img + " width = '75px' "  + " height = '75px' " + ">");
          $("#img_darth").remove();
          $("#npc1").html("");
          a_game_data.s_state = "choose_enemy";
          $("#results").html("You have selected your hero. Now select an enemy. " + a_game_data.s_state);
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
          a_game_data.s_state = "choose_enemy";
          $("#results").html("You have selected your hero. Now select an enemy. " + a_game_data.s_state);
        }    
    });


    $("#npc3").click(function(){
        $("#results").html("You have selected your hero. Now select an enemy.");
        var s_img =  "./assets/images/maul.png";
        if (a_game_data.s_state === "choose_hero")
        {
          $("#rest").html("<img src=" + s_img + " width = '75px' "  + " height = '75px' " + ">");
          $("#img_maul").html("");
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
          a_game_data.s_state = "choose_enemy";
          $("#results").html("You have selected your hero. Now select an enemy. " + a_game_data.s_state);
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
          a_game_data.s_state = "choose_enemy";
          $("#results").html("You have selected your hero. Now select an enemy. " + a_game_data.s_state);
        }    
    });

        $("#en1").click(function()
        {
          if (a_game_data.s_state === "choose_enemy")
          {
            // move the defender
            var obj = $("#en1").html();
            $("#defender").html(obj);
            $("#en1").html("");

            // move en2
            obj = $("#en2").html();
            $("#en1").html(obj);
            $("#en2").html("");

            // move en3
            obj = $("#en3").html();
            $("#en2").html(obj);
            $("#en3").html("");

            // move the hero
            obj = $("#rest").html();
            $("#attacker").html(obj);
            $("#rest").html("");

            a_game_data.s_state = "battle";
            $("#results").html("You have selected your opponent. Let the battle begin." + a_game_data.s_state);
          }
        });


        $("#en2").click(function()
        {
          if (a_game_data.s_state === "choose_enemy")
          {

            // move the defender
            var obj = $("#en2").html();
            $("#defender").html(obj);
            $("#en2").html("");

            // move the en3
            var obj = $("#en3").html();
            $("#en2").html(obj);
            $("#en3").html("");

            // move the hero
            obj = $("#rest").html();
            $("#attacker").html(obj);
            $("#rest").html("");


            a_game_data.s_state = "battle"
            $("#results").html("You have selected your opponent. Let the battle begin." + a_game_data.s_state);
          }
        });

        $("#en3").click(function()
        {
          if (a_game_data.s_state === "choose_enemy")
          {

            // move the defender
            var obj = $("#en3").html();
            $("#defender").html(obj);
            $("#en3").remove();

            // move the hero
            obj = $("#rest").html();
            $("#attacker").html(obj);
            $("#rest").remove();


            a_game_data.s_state = "battle"
            $("#results").html("You have selected your opponent. Let the battle begin." + a_game_data.s_state);
          }
        });


    $("#attack_button").click(function(){
      if (a_game_data.s_state === "battle")
      {
        $("#results").html("Boom. " + a_game_data.s_state);
      }

        //$("#results").html("attack_button clicked with mouse");
        //console.log("attack_button clicked with mouse");
        //$("#the_image_of_attacker").remove();
        //$("#the_image_of_attacker").html("");
        //$("#the_image_of_attacker").html('<img id="hans" src="./assets/images/han.png" />');
       
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
          $("#the_image_of_attacker").html("");
          $("#the_image_of_defender").html("");
          $("#rest").html("");

          s_img =  a_game_data[a_npc_list][0][image]; //"./assets/images/maul.png";
          $("#img_han").html("<img src=" + s_img + " width = '75px' "  + " height = '75px' " + ">");
          
          s_img =  a_game_data[a_npc_list][2][image]; //"./assets/images/maul.png";
          $("#img_chewy").html("<img src=" + s_img + " width = '75px' "  + " height = '75px' " + ">");
          
          s_img =  a_game_data[a_npc_list][3][image]; //"./assets/images/maul.png";
          $("#img_maul").html("<img src=" + s_img + " width = '75px' "  + " height = '75px' " + ">");
          
          s_img =  a_game_data[a_npc_list][4][image]; //"./assets/images/maul.png";
          $("#img_darth").html("<img src=" + s_img + " width = '75px' "  + " height = '75px' " + ">");
          

          $("#en1").html("");
          $("#en2").html("");
          $("#en3").html("");


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

      function mod_test()
      {
        for (var i = 0; i < 100; i++)
        {
          var result3 = i % 3;
          var result5 = i % 5;


          if (result  === 0)
          {
            console.log ("Fizz");
          }

          else if (result  === 0)
          {
             console.log ("Fizz");
           }

           else if (i % 3  && i % 5)
           {
             console.log ("Fizz");
           }
          else
          {
          console.log(i);
          }
        }
      }

      function prime_test(num)
      {

      }


      function sort_media (){
        var files = ["pavans_first_birthday.mov",
          "owens_asleep_at_the_computer.jpg",
          "michael_fights_a_polar_bear.mp4",
          "nate_road_rage.avi",
          "ruby_skydiving.jpeg",
          "ken_getting_his_black_belt.png",
          "dan_winning_underground_street_race.mov",
          "its_hard_to_come_up_with_file_names.gif",
          "seriously_this_is_taking_too_long.mpg",
          "i_wonder_how_many_of_these_i_should_have.png",
          "probably_a_few_more.avi",
          "nutmeg_is_clawing_my_sneakers_again.mp4",
          "cat_i_will_destroy_you.gif",
          "i_wish_we_had_a_dog.jpeg",
          "stop_looking_at_me_like_that_nutmeg.mpeg",
          "aww_i_cant_hate_you.png",
          "omg_my_sneakers.avi",
          "cat_you_are_the_worst.mp4"
          ];
          var image_files = [];
          var video_files = [];
          var other_files = [];

          var i_length = files.length;

          for (var i = 0; i < i_length; i++)
          {
            //
            var s_name = files[i];
            var i_index_of_dot = s_name.indexOf(".");
            var s_ext = s_name.substring(i_index_of_dot);

            if (s_ext === ".jpg" || s_ext === ".gif" || s_ext === ".jpeg"  ||s_ext === ".png" ){
                image_files.push(s_name);

            }
            else if ( s_ext === ".mov" || s_ext === ".avi" || s_ext === ".mpeg"  ||s_ext === ".mp4" ||s_ext === ".mpg" ){
                video_files.push(s_name);
            }
          else {
                other_files.push(s_name);
            }


          }
            console.log( "image_files: " + image_files)
            console.log( " " )

            console.log( "video_files: " + video_files)
                        console.log( " " )

            console.log( "other_files: " + other_files)
            
      }