import {Assesment2, Scene, Instructions} from '../Assesment2.js';
import {CoordinatePlane} from '../modules/CoordinatePlane.js';

// This is a scene template 



const build_scene = (ctx) =>{
    // create scene object
    const scene = new Scene(ctx);

   




    // contents of scene
    scene.contents = ()=>{

    scene.make_buttons();

         // set desired score - defaults to 10
    scene.score_needed = 0


    // create instructions
    scene.instructions = new Instructions('y-intercept', ['Contents:', 'Definition of y-intercept and b', 'Identify the y-intercept and b', 'Place the y-intercept given b', 'Identify slope (m) and y-intercept (b) of a line', 'Make a line given slope (m) and y-intecept (b)']);
    
    //scene.handle_instructions(); // handle instructions


    // create criteria for satisfying scene.is_task_complete
    const check_if_task_completed = ()=>{
        if(scene.score == scene.score_needed){
            console.log('task completed')
           // scene.canvas.removeEventListener('keydown', scene.handle_instructions_inner);
            scene.remove_all_listeners()
            scene.is_task_complete = true;
        }
    }

    const check_answer = ()=>{
        console.log('check answer')
        //if(answer_not_viable){//warning message}
       // if(answer_correct){// increment score // next question}
       // if(answer_incorrect){// decrease/empty score // explanation // next question}
    }

  



    scene.keydown.push(check_if_task_completed);
    //scene.keydown.push(check_answer);
    //scene.Space.push(howdy);
    //scene.Enter.push(howdy);

    scene.add_all_listeners();
    //scene.remove_all_listeners();

        // adjust plane
       
        scene.make_plane();
        scene.plane.grid_color = '#333';
        scene.plane.borderColor = "#333";

        scene.plane.gridlines = [];
        scene.plane.create_gridlines();
        scene.plane.create_line_mb(1.5, 2);
        scene.plane.lines[0].color = 'cyan';
        scene.plane.point_size = 15;
        scene.plane.make_point(0, 2);
        scene.plane.points[0].color = 'fuchsia'
        
    
        //scene.plane.reset_unit_size(100);

     
        scene.animation_loop();// run loop   
    }


    let start;
    let speed = .002;
    let stalled_time = 0;
        // animation loop of scene
    scene.animation_loop = (timestamp)=>{
      
            if(!scene.end_condition){ // does not redo loop if end condition is satisfied;
                //console.log('animation running');
                if(start === undefined)
                start = timestamp;
            const elapsed = timestamp - start;

             //scene.plane.points[0].y += elapsed/1000000000000000000000000000000000000000000000000000000000000000000000000000000;
             scene.plane.points[0].y += speed;
             scene.plane.lines[0].b += speed;
             if(scene.plane.points[0].y > scene.plane.m.y.max_unit || scene.plane.points[0].y < scene.plane.m.y.min_unit){
                 speed *= -1;
                 console.log('speed change');
             }

    
                scene.clear_canvas(); // clears canvas

                
                scene.display_title('y-intercept'); // display title if desired
                scene.is_task_complete = true;
    
                //if scene plane
                if(scene.plane != null){
                    scene.plane.draw();
                }

                scene.font_size = scene.use_scale.y/10;
                scene.display_text_lines(['b = ' + Math.round(scene.plane.points[0].y*4)/4], scene.make_smu_x(0.6), scene.make_smu_y(0.8))
                scene.font_size = scene.use_scale.y/20;
    
               //display score
                scene.display_score();

                scene.frame_use_scale();
                scene.font_size = scene.use_scale.y/38;
                scene.ctx.fillStyle = "#ccc";
                scene.display_text_lines(['definition of y-intercept:', ' the point where a line (or function) intersects the y-axis.', 'the y coordinate is often denoted as the variable "b".'], scene.make_smu_x(0.6), scene.make_smu_y(0.6))
    
                // display next button
                scene.display_next_button();
                // displays instructions if i is pressed
                if(scene.instructions_visible){scene.display_instructions();}
     
               requestAnimationFrame(scene.animation_loop); // start loop again
                }else{ // otherwise break the loop
                    scene.remove_all_listeners();
                    scene.buttons.forEach((button)=>{
                        button.remove_all_listeners();
                    })
                    //scene.canvas.removeEventListener('keydown', this.handle_instructions_inner)
                    scene.plane.remove_all_listeners();
                    cancelAnimationFrame(scene.animation_loop);
                    scene.clear_canvas();
                    scene.display_text_lines(['scene over'])
                }
     }

   

    return scene; // return scene object because this function returns an object 

}





export{build_scene};


