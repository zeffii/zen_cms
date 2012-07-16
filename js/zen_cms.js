// zen_cms is MIT licensed.

var script_table = {};
script_table['project_1'] = "Monster_Tile_Renderer.txt";
script_table['project_2'] = "project_2.txt";

// takes a string path and returns file as string
function read_content(myUrl) {
    
    var result = null;
    $.ajax( {   url: myUrl, 
              type: 'get', 
              dataType: 'html',
              async: false,
              success: function(data) { result = data; } 
            }
    );
    FileReady = true;
    return result;
};

// binds a message to each menu item, when clicked replace content
// of the project div with that found in the corresponding text.
$(document).ready(function() {  

    for( project_id in script_table){
        // project_name is project_id with all instances of underscore replaced by a space
        var project_name = project_id.replace(/_/g,' ');

        // populate #my_menu with <li id="project_2">project 2</li>
        $('#my_menu').append('<li id=\"' + project_id + '\">' + project_name +'</li>');
        
        // binds the click message while we are at it.
        $('#'+ project_id).bind('click', function(e) {
        var a = $(this).attr('id');
        var location = script_table[a];
        $('#project').empty();
        $('#project').append(read_content(location));
        console.log(a);
        });

    }

});
