import {Assesment2, Scene, Instructions} from '../Assesment2.js';
import {CoordinatePlane} from '../modules/CoordinatePlane.js';
import {runInput} from '../modules/InputBox.js';

// This is a scene template 



const build_scene = (ctx) =>{
    // create scene object
    const scene = new Scene(ctx);


   




    // contents of scene
    scene.contents = ()=>{
        scene.make_buttons();
        runInput();// make buttons

         // set desired score - defaults to 10
    scene.score_needed = 5;


    // create instructions
    scene.instructions = new Instructions('Place the y-intercept', ['Instructions:', 'Use the up and down arrow keys to move the y-intercept.', 'When you think the y-intercept matches with b, submit your answer.']);
    
   // scene.handle_instructions(); // handle instructions


    // create criteria for satisfying scene.is_task_complete
    const check_if_task_completed = ()=>{
        if(scene.score == scene.score_needed){
            scene.is_task_complete = true;
        }
    }

   

    

  



    scene.keydown.push(check_if_task_completed);
    //scene.Space.push(howdy);
    //scene.Enter.push(howdy);

    
    //scene.remove_all_listeners();

        // adjust plane
       
        scene.make_plane(scene.make_smu_x(0.1), scene.make_smu_y(0.1), scene.make_smu_x(0.7), scene.make_smu_y(0.9));
        scene.plane.grid_color = '#ccc';
        scene.plane.borderColor = "#ccc";
        //scene.plane.unit_size = 150;
        //scene.plane.create_gridlines();
     
        scene.plane.point_size = 15;
     
       
        
    
        //scene.plane.reset_unit_size(100);

        let examples = {example_lines: [], example_points:[], desired_bs:[]}
        //example lines create
        const create_example = (m, desired_b)=>{
            scene.plane.create_line_mb(m, 0);
            scene.plane.make_point(0,0);

            let example_line = scene.plane.lines.pop();
            let example_point = scene.plane.points.pop();
            examples.example_lines.push(example_line);
            examples.example_points.push(example_point);
            examples.desired_bs.push(desired_b);
        }

        create_example(1,3);
        create_example(-0.5, -4);
        create_example(.2, 0.05);
        create_example(3,20);
        create_example(-4, 0);

        // scene.plane.create_line_mb(3/2,3); // example 1;
        // scene.plane.make_point(0,3);

        // scene.plane.create_line_mb(-1, -2); // exmample
        // scene.plane.make_point(0,-2);

        // scene.plane.create_line_mb(-0.2, 1); // exmample
        // scene.plane.make_point(0,1);

        // scene.plane.create_line_mb(2, 0); // exmample
        // scene.plane.make_point(0,0);

        // scene.plane.create_line_mb(0.5, -3); // exmample
        // scene.plane.make_point(0,-3);

        // let example_lines = [...scene.plane.lines];
        // let example_intersces = [...scene.plane.points];

        

        const load_example = ()=>{
            scene.plane.lines =[];
            scene.plane.points = [];


            let example_line = examples.example_lines.pop();
            scene.plane.lines.push(example_line);

            let example_point = examples.example_points.pop();
            scene.plane.points.push(example_point);

            let current_b = examples.desired_bs.shift();
            scene.other_assets[0] = current_b;
        }

        //scene.Enter.push(load_example);


        


        scene.plane.lines = [];
        scene.plane.points = [];


        load_example();
        
        

        //scene.plane.lines.push(example_lines[0])

     
        

        // var inputX = new CanvasInput({
        //     canvas: document.getElementById('canvas1'),
        //     fontSize: scene.use_scale.y/30,
        //     y: scene.make_smu_y(0.3),
        //     x: scene.make_smu_x(0.8),
        //     fontFamily: 'Arial',
        //     fontColor: '#ccc',
        //     backgroundColor: '#333',
        //     fontWeight: 'bold',
        //     width: scene.use_scale.x*0.04,
        //     padding: 10,
        //     borderWidth: 0,
        //     borderColor: '#000',
        //     borderRadius: 3,
        //     boxShadow: '1px 1px 0px #fff',
        //     innerShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
        //     placeHolder: 'x',
        //     placeHolderColor: 'cyan',
        //     onkeyup: function(){checkSubmitReady()}
        //   });

        
    
        // var inputY = new CanvasInput({
        //     canvas: document.getElementById('canvas1'),
        //     fontSize: scene.use_scale.y/30,
        //     y: scene.make_smu_y(0.3),
        //     x: scene.make_smu_x(0.88),
        //     fontFamily: 'Arial',
        //     fontColor: '#ccc',
        //     backgroundColor: '#333',
        //     fontWeight: 'bold',
        //     width: scene.use_scale.x*0.04,
        //     padding: 10,
        //     placeHolderColor: 'cyan',
        //     borderWidth: 0,
        //     borderColor: '#000',
        //     borderRadius: 3,
        //     boxShadow: '1px 1px 0px #fff',
        //     innerShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
        //     placeHolder: 'y',
        //     onkeyup: function(){checkSubmitReady()}
        // });

        // var inputB = new CanvasInput({
        //     canvas: document.getElementById('canvas1'),
        //     fontSize: scene.use_scale.y/30,
        //     y: scene.make_smu_y(0.5),
        //     x: scene.make_smu_x(0.88),
        //     fontFamily: 'Arial',
        //     fontColor: '#ccc',
        //     backgroundColor: '#333',
        //     fontWeight: 'bold',
        //     width: scene.use_scale.x*0.04,
        //     padding: 10,
        //     placeHolderColor: 'cyan',
        //     borderWidth: 0,
        //     borderColor: '#000',
        //     borderRadius: 3,
        //     boxShadow: '1px 1px 0px #fff',
        //     innerShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
        //     placeHolder: 'b',
        //     onkeyup: function(){checkSubmitReady()},
          
        // });

        const checkSubmitReady = ()=>{
            if(
                true
                // inputX._value == 'x' ||
                // inputY._value == 'y' ||
                // inputB._value == 'b' ||
                // inputX._value == '' ||
                // inputY._value == '' ||
                // inputB._value == '' 

            ){
                scene.submit_ready = false;
                
            }else{
                scene.submit_ready = true;
            }
        }

        // scene.inputs.push(inputX); // input 0

        // scene.inputs.push(inputY); // input 1

        // scene.inputs.push(inputB); // input 2

        //scene.inputs.forEach((input)=>{input.onkeydown = checkSubmitReady()});

        

        scene.submit_ready = false;

        scene.check_answer = ()=>{
            scene.submit_ready = false;
            // check to see if correct
            if(
                scene.other_assets[0] == scene.plane.lines[0].b
                ){
                    scene.score +=1;
                    if (scene.score >= scene.score_needed){
                        scene.remove_all_listeners();
                        scene.buttons.forEach((button)=>{
                            button.remove_all_listeners();
                        })
                        scene.is_task_complete = true;
                    }else{
                        console.log('correct')
                    //scene.inputs.forEach((input)=>{input._value = ''})
                    let new_m = Math.random()*6 - 3;
                    let new_b = Math.round(Math.random()*8 - 4);
                    if(examples.example_lines.length == 0){create_example(new_m, new_b)};
                    load_example();
                    }
                
            }else{
                console.log('incorrect')
               // scene.score -= 2;
                if(scene.score <0){scene.score = 0}
            }
        }

        const move_intercept_up = ()=>{
            
            scene.plane.points[0].y += scene.plane.increment;
            let ten_multiple = 10**(Math.abs(scene.plane.divisor.order_of_magnitude)+2);
            scene.plane.points[0].y = Math.round(scene.plane.points[0].y*ten_multiple)/ten_multiple
            scene.plane.lines[0].b = scene.plane.points[0].y
            scene.submit_ready = true;
            //scene.plane.points[0].y = scene.plane.points[0].y.toFixed(scene.plane.divisor.order_of_magnitude+1)
            console.log(scene.plane.points[0].y);
        }

        const move_intercept_down = ()=>{
            scene.plane.points[0].y -= scene.plane.increment;
            let ten_multiple = 10**(Math.abs(scene.plane.divisor.order_of_magnitude)+2);
            scene.plane.points[0].y = Math.round(scene.plane.points[0].y*ten_multiple)/ten_multiple
            scene.plane.lines[0].b = scene.plane.points[0].y

            scene.submit_ready = true;
            console.log(scene.plane.points[0].y);
        }

        

        //scene.keydown.push(checkSubmitReady);
        scene.up.push(move_intercept_up);
        scene.down.push(move_intercept_down);

        scene.animation_loop();// run loop   
        scene.add_all_listeners();
    }


    let start;
  
    let stalled_time = 0;
        // animation loop of scene
    scene.animation_loop = (timestamp)=>{
            if(!scene.end_condition){ // does not redo loop if end condition is satisfied;
                //console.log('animation running');
                if(start === undefined)
                start = timestamp;
            const elapsed = timestamp - start;

             //scene.plane.points[0].y += elapsed/1000000000000000000000000000000000000000000000000000000000000000000000000000000;
           

    
                scene.clear_canvas(); // clears canvas

                
                scene.display_title('Place the y-intercept'); // display title if desired
                scene.font_size *= 1.8;
                scene.ctx.fillStyle = 'cyan'
                scene.display_text_lines(['b = ' + scene.other_assets[0]], scene.make_smu_x(0.1), scene.make_smu_y(0.01)+scene.font_size)
                //scene.is_task_complete = true;
    
                //if scene plane
                if(scene.plane != null){
                    scene.plane.draw();
                }

                scene.font_size = scene.use_scale.y/30;
    
               //display score
                scene.display_score();

                scene.frame_use_scale();
                scene.font_size = scene.use_scale.y/38;
                scene.ctx.fillStyle = "#ccc";

                // display inputs
                scene.inputs.forEach((input)=>input.render());
                scene.font_size = scene.use_scale.y/30;
          

                // display submit button
                if(scene.submit_ready){scene.submit_button.draw()};
            
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
                    cancelAnimationFrame(scene.animation_loop);
                    scene.clear_canvas();
                    scene.display_text_lines(['scene over'])
                }
     }

   

    return scene; // return scene object because this function returns an object 

}





export{build_scene};


