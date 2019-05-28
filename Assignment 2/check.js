function check(){
    event.preventDefault();
    var devid=document.getElementById("devid").value;
    if(devid.length<1)
    {
       document.getElementById("dev_id").innerHTML="device id cannot be empty";
    }
    var devname=document.getElementById("devname").value;
    if(devname.length<1)
    {
       document.getElementById("dev_name").innerHTML="device name  cannot be empty";
    }
    var price=document.getElementById("price").value;
    if(price.length<1)
    {
       document.getElementById("_price").innerHTML="price cannot be empty";
    }
    var seller=document.getElementById("seller").value;
    if(seller.length<1)
    {
       document.getElementById("_seller").innerHTML="seller cannot be empty";
    }
    var address=document.getElementById("address").value;
    if(address.length<1)
    {
       document.getElementById("_addrs").innerHTML="Address cannot be empty";
    }
}  