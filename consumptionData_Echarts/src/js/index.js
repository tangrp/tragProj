$(function () {
    let data = null;
    let keys = [];
    let week = ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"];
    let myChartline = echarts.init($("#ecsLine")[0],'dark');   
    let myChartpie = echarts.init($("#ecsPie")[0],'dark');
    /* 加载json数据 */
    function loadData() {
        $.ajax({
            url: "./data/consumption.json",
            type: "get",
            datatype: "json",
            success: function (response) {
                data = response;
                loadRowCol(response);
            }
        })
    }
    loadData();
    loadframe();
    
    /* 加载行/列/总和数据 */
    function loadRowCol(datas) {
        // 表格行的数据
        let newDataRow = [];   
        week.forEach((ele, idx) => {
            newDataRow[idx] = [];
            for (let key in datas) {
                newDataRow[idx].push(datas[key].value[idx]);
            }
        });

        // 总计
        let dataSum = [];
        // 关键key
        keys = [];
        for (let key in datas) {
            let sum = 0;
            keys.push(key);
            datas[key].value.forEach(element => {
                sum += element;
            });
            dataSum.push(sum); 
        }
        loadHtml(newDataRow,dataSum);
        loadChart(dataSum);
    }
    /* 加载页面 */
    function loadHtml(datas,dataSum) {
        let strHtml = ``;
        let strAllHtml = ``;
        /* 加载详细信息 */
        datas.forEach((ele,idx) => {
            strHtml += `<tr>${(function(){
                let tempstr =``
                ele.forEach((subele,subidx) => {
                    // 第一个表格添加星期
                    if(subidx===0){
                        tempstr += `<td>${week[idx]}</td><td data-index=${idx} class=${keys[subidx]} contenteditable="true">${subele}</td>`
                    }else{
                        tempstr += `<td data-index=${idx} class=${keys[subidx]} contenteditable="true">${subele}</td>`
                    }
                })
                return tempstr;
            })()}</tr>`
        });
        $("tbody").html(strHtml);
        tbodyonblur();

        /* 加载总计 */
        dataSum.forEach((ele,idx) => {
            strAllHtml+=`${(function(){
                let tempstr =``
                // 第一个表格添加总计
                if(idx===0){
                    tempstr +=`<td>总计</td><td>${ele}</td>`
                }else{
                    tempstr +=`<td>${ele}</td>`
                }
                return tempstr;
            })()}`
        });
        $("tfoot tr").html(strAllHtml);
    }

    /* 修改数据 */
    function tbodyonblur(){
        let curvlu = 0;
        $("tbody td").focus(function(){
            curvlu = $(this).text();
        }).blur(function(){
            // 数据不是数字
            if(isNaN($(this).text())){
                $(this).css({"backgroundColor":"pink"});
                $(this).focus();
            }else{
                // 数据和之前不一致
                if(curvlu!==$(this).text()){
                    data[$(this).attr("class")].value[$(this).attr("data-index")]=parseFloat($(this).text());
                    loadRowCol(data);
                }else{
                   // 处理无        
                }
            }
        })
    }

    /* 加载Echarts框架 */
    function loadframe(){
        myChartline.setOption({
            title:{
                text:"本周生活消费表",
                top: 0
            },
            grid:{
              right:130
            },  
            legend:{
                data:keys,
                right:0,
                itemGap: 17,
                bottom:50,
                orient:'vertical',
            },
            tooltip:{
                show:true
            },
            xAxis:{
                data:week,
            },
            yAxis:{},
            series:[]
        });
        /* 饼图 */
        myChartpie.setOption({
            title:{
                text:"本周生活消费比重"
            },
            tooltip:{
                show:true
            },
            series:[]
        })
    }
    
     /* 加载Echarts数据 */
    function loadChart(dataSum){
        myChartline.setOption({
            series:(function(){
                let tempseries = [];
                keys.forEach((element,idx) => {
                    tempseries.push({
                        name:keys[idx],
                        type:"bar",
                        data:data[element].value,   
                    })
                });
                return tempseries;
            })()
        })
        /* 饼图 */
        myChartpie.setOption({
            title:{
                text:"本周生活消费比重"
            },
            series:[{
                type:"pie",
                data:(function(){
                    let tempData=[];
                    dataSum.forEach((ele,idx) => {
                        tempData.push({value:ele,name:keys[idx]})
                    });
                    return tempData;
                })()
            }]
           
        })
    }
    /* 图标自适应窗口 */
    window.addEventListener("resize",function(){
        myChartline.resize();
        myChartpie.resize();
    })
})
