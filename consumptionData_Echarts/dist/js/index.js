"use strict";

$(function () {
    var data = null;
    var keys = [];
    var week = ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"];
    var myChartline = echarts.init($("#ecsLine")[0], 'dark');
    var myChartpie = echarts.init($("#ecsPie")[0], 'dark');
    /* 加载json数据 */
    function loadData() {
        $.ajax({
            url: "./data/consumption.json",
            type: "get",
            datatype: "json",
            success: function success(response) {
                data = response;
                loadRowCol(response);
            }
        });
    }
    loadData();
    loadframe();

    /* 加载行/列/总和数据 */
    function loadRowCol(datas) {
        // 表格行的数据
        var newDataRow = [];
        week.forEach(function (ele, idx) {
            newDataRow[idx] = [];
            for (var key in datas) {
                newDataRow[idx].push(datas[key].value[idx]);
            }
        });

        // 总计
        var dataSum = [];
        // 关键key
        keys = [];
        for (var key in datas) {
            var sum = 0;
            keys.push(key);
            datas[key].value.forEach(function (element) {
                sum += element;
            });
            dataSum.push(sum);
        }
        loadHtml(newDataRow, dataSum);
        loadChart(dataSum);
    }
    /* 加载页面 */
    function loadHtml(datas, dataSum) {
        var strHtml = "";
        var strAllHtml = "";
        /* 加载详细信息 */
        datas.forEach(function (ele, idx) {
            strHtml += "<tr>" + function () {
                var tempstr = "";
                ele.forEach(function (subele, subidx) {
                    // 第一个表格添加星期
                    if (subidx === 0) {
                        tempstr += "<td>" + week[idx] + "</td><td data-index=" + idx + " class=" + keys[subidx] + " contenteditable=\"true\">" + subele + "</td>";
                    } else {
                        tempstr += "<td data-index=" + idx + " class=" + keys[subidx] + " contenteditable=\"true\">" + subele + "</td>";
                    }
                });
                return tempstr;
            }() + "</tr>";
        });
        $("tbody").html(strHtml);
        tbodyonblur();

        /* 加载总计 */
        dataSum.forEach(function (ele, idx) {
            strAllHtml += "" + function () {
                var tempstr = "";
                // 第一个表格添加总计
                if (idx === 0) {
                    tempstr += "<td>\u603B\u8BA1</td><td>" + ele + "</td>";
                } else {
                    tempstr += "<td>" + ele + "</td>";
                }
                return tempstr;
            }();
        });
        $("tfoot tr").html(strAllHtml);
    }

    /* 修改数据 */
    function tbodyonblur() {
        var curvlu = 0;
        $("tbody td").focus(function () {
            curvlu = $(this).text();
        }).blur(function () {
            // 数据不是数字
            if (isNaN($(this).text())) {
                $(this).css({ "backgroundColor": "pink" });
                $(this).focus();
            } else {
                // 数据和之前不一致
                if (curvlu !== $(this).text()) {
                    data[$(this).attr("class")].value[$(this).attr("data-index")] = parseFloat($(this).text());
                    loadRowCol(data);
                } else {
                    // 处理无        
                }
            }
        });
    }

    /* 加载Echarts框架 */
    function loadframe() {
        myChartline.setOption({
            title: {
                text: "本周生活消费表",
                top: 0
            },
            grid: {
                right: 130
            },
            legend: {
                data: keys,
                right: 0,
                itemGap: 17,
                bottom: 50,
                orient: 'vertical'
            },
            tooltip: {
                show: true
            },
            xAxis: {
                data: week
            },
            yAxis: {},
            series: []
        });
        /* 饼图 */
        myChartpie.setOption({
            title: {
                text: "本周生活消费比重"
            },
            tooltip: {
                show: true
            },
            series: []
        });
    }

    /* 加载Echarts数据 */
    function loadChart(dataSum) {
        myChartline.setOption({
            series: function () {
                var tempseries = [];
                keys.forEach(function (element, idx) {
                    tempseries.push({
                        name: keys[idx],
                        type: "bar",
                        data: data[element].value
                    });
                });
                return tempseries;
            }()
        });
        /* 饼图 */
        myChartpie.setOption({
            title: {
                text: "本周生活消费比重"
            },
            series: [{
                type: "pie",
                data: function () {
                    var tempData = [];
                    dataSum.forEach(function (ele, idx) {
                        tempData.push({ value: ele, name: keys[idx] });
                    });
                    return tempData;
                }()
            }]

        });
    }
    /* 图标自适应窗口 */
    window.addEventListener("resize", function () {
        myChartline.resize();
        myChartpie.resize();
    });
});