///////// Job Example 3
//An instruction can also be a function call that
//returns a low level array for Dexter to execute.
///Dexter.sleep and Dexter.move_to
//are two such calls. Select and eval them to see their result.
//Just as in a normal JavaScript program, we can
//wrap a call in another function and call that other function
//as we do below by wrapping Dexter.move_all_joints in "move_once".
function move_once(){
    return Dexter.move_all_joints([0, 45, 90, -45, 0]) //also try: Dexter.move_to([100000, 200000, 300000])
}
function go_home(){
    return Dexter.move_all_joints([0, 0, 0, 0, 0]) //also try: Dexter.move_to([100000, 200000, 300000])
}

function sleep_and_move(){
    return [Dexter.move_all_joints([0, 0, 0, 0, 0]),
            Dexter.sleep(1),
            Dexter.move_all_joints([-98, 77, -141, 30, -30]),
            Dexter.sleep(1),
            Dexter.move_all_joints([98, -77, 141, -30, 30]),
            Dexter.sleep(1),
            Dexter.move_all_joints([0, 0, 0, 0, 0])
           ]
}

new Job({name: "j3",
         do_list: [sleep_and_move]} //use the above function definitions as do_list items
)
/* Job.j3                    //the newly created Job instance
 Job.j3.status_code
 Job.j3.robot.joint_angles() //array of 5 angles, each in arcseconds
 Job.j3.robot.joint_angle(2) //1 thru 5
 Job.j3.robot.joint_xyz(5)   //0 thru 5, default 5. 0 is robot base position
 Job.j3.robot.joint_xyzs()   //Array of base xyz and all joint xyzs.
*/
