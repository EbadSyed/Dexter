//This file is loaded when you launch DDE.
//Add whatever JavaScript you like to the end.

//To change DDE colors,
// 1. Uncomment the below line(s).
// 2. Select the first arg.
// 3. Choose the "Insert" menu, "Color" item.
// 4. After inserting the new color, eval the "set_" call.
// 5. To get the default color, just comment out the line and relaunch DDE.
// set_window_frame_background_color("#b8bbff")
// set_pane_header_background_color("#93dfff")
// set_menu_background_color("#4cc9fd")
// set_button_background_color("#4cc9fd")

persistent_set("ROS_URL", "localhost:9090") //required property, but you can edit the value.
persistent_set("default_dexter_ip_address", "192.168.1.240") //required property but you can edit the value.
persistent_set("default_dexter_port", "50000") //required property, but you can edit the value.
new Dexter({name: "dexter0"}) //dexter0 must be defined.
