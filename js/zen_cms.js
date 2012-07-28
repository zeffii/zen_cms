// zen_cms is MIT licensed.

var script_table = {};
script_table['Edge_Tools_VTX'] = "Edge_Tools.txt";
script_table['Monster_Tile_Renderer'] = "Monster_Tile_Renderer.txt";
script_table['Add_Vertex'] = "Add_Vertex.txt";
script_table['Add_Empty'] = "Add_Empty.txt";
script_table['Import_AFM'] = "Monster_Tile_Renderer.txt";
script_table['Text_Appeal'] = "Text_Appeal5.txt";
script_table['On_Naming'] = "On_Naming.markdown";
script_table['On_Comments'] = "On_Comments.markdown";

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

    var converter = new Showdown.converter();
    // result = result.replace(/\r\n/g,'\n');
    return converter.makeHtml(result);
    // result = markdown.toHTML( result );
    // return result;

};



$(document).ready(function() {  

    for( project_id in script_table){
        // project_name is project_id with all instances of underscore replaced by a space
        var project_name = project_id.replace(/_/g,' ');

        $('#my_menu').append('<li id=\"' + project_id + '\">' + project_name +'</li>');
        
        // binds the click message while we are at it.
        $('#'+ project_id).on('click', function(e) {
            var a = $(this).attr('id');
            var location = script_table[a];
            $('#project').empty();

            var content = read_content(location);
            $('#project').append(content);
            prettyPrint();
            console.log(a);
        });

    }

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    }); 
  
    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 480);
        return false;
    });

});

