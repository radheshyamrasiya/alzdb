
$(document).ready(function(){
  $(document).on('click', '#generatePreview', function(){
    var title = $(".input").val();
    $(".tiletitle").html(title);
    var idx = 1;

    $(".linl_name").each(function(){
      $(".tilelink"+idx).html( $(this).val());
      idx++;
    })

    idx = 1;
    $(".linl_link").each(function(){
      $(".tilelinklink"+idx).attr("href", $(this).val())
      idx++;
    })
  });
});
// onAuthStateChanged(auth, (user) => {
//     if (user) {      //logged in
//       currentUser = auth.currentUser;
//       currentUserId = user.uid;
//       updateLogout();
      
//     } else {  //logged out
//       currentUser = "nouserloggedin";
//       currentUserId = "0x00000";
//     }
//   });
 