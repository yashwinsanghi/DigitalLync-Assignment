var ar1=[];
            var ar2=[];
            var ar3=[];
            var ar4=[];
            var ar5=[];
            var n=1;
            var x=0;
            function addrow(){
                var addrow=document.getElementById("data");
                var row=addrow.insertRow(n);
                ar1[x]=document.getElementById("devid").value;
                ar2[x]=document.getElementById("devname").value;
                ar3[x]=document.getElementById("price").value;
                ar4[x]=document.getElementById("seller").value;
                ar5[x]=document.getElementById("address").value;

                var c1=row.insertCell(0);
                var c2=row.insertCell(1);
                var c3=row.insertCell(2);
                var c4=row.insertCell(3);
                var c5=row.insertCell(4);


                c1.innerHTML=ar1[x];
                c2.innerHTML=ar2[x];
                c3.innerHTML=ar3[x];
                c4.innerHTML=ar4[x];
                c5.innerHTML=ar5[x];

                n++;
                x++;

            }