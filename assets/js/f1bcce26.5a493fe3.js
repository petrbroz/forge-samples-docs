"use strict";(self.webpackChunkforge_samples_docs=self.webpackChunkforge_samples_docs||[]).push([[732],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),h=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=h(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=h(n),u=r,g=p["".concat(l,".").concat(u)]||p[u]||c[u]||i;return n?o.createElement(g,s(s({ref:t},d),{},{components:n})):o.createElement(g,s({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var h=2;h<i;h++)s[h]=n[h];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9184:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return a},metadata:function(){return h},toc:function(){return c}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),s=["components"],a={},l="Histogram Charts",h={unversionedId:"tutorials/dashboard/charts",id:"tutorials/dashboard/charts",title:"Histogram Charts",description:"In this step we will create a viewer extension that will display a histogram",source:"@site/docs/tutorials/03-dashboard/03-charts.mdx",sourceDirName:"tutorials/03-dashboard",slug:"/tutorials/dashboard/charts",permalink:"/forge-samples-docs/docs/tutorials/dashboard/charts",editUrl:"https://github.com/petrbroz/forge-samples-docs/edit/master/docs/tutorials/03-dashboard/03-charts.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Model Summary",permalink:"/forge-samples-docs/docs/tutorials/dashboard/panel"},next:{title:"Data Grid",permalink:"/forge-samples-docs/docs/tutorials/dashboard/grid"}},d={},c=[{value:"Extension skeleton",id:"extension-skeleton",level:2},{value:"Toolbar",id:"toolbar",level:2},{value:"Dependency loading",id:"dependency-loading",level:2},{value:"Charts",id:"charts",level:2},{value:"Try it out",id:"try-it-out",level:2}],p={toc:c};function u(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"histogram-charts"},"Histogram Charts"),(0,i.kt)("p",null,"In this step we will create a viewer extension that will display a histogram\nof values for a specific property across all design elements. We will use the\nopen source library ",(0,i.kt)("a",{parentName:"p",href:"https://www.chartjs.org"},"Chart.js")," to display the histograms\nas bar charts and pie charts."),(0,i.kt)("h2",{id:"extension-skeleton"},"Extension skeleton"),(0,i.kt)("p",null,"Just like in previous steps, let's create a new file under the ",(0,i.kt)("inlineCode",{parentName:"p"},"extensions")," subfolder,\ncall it ",(0,i.kt)("inlineCode",{parentName:"p"},"HistogramExtension.js"),", and populate it with the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="wwwroot/extensions/HistogramExtension.js"',title:'"wwwroot/extensions/HistogramExtension.js"'},"import { BaseExtension } from './BaseExtension.js';\n\nclass HistogramExtension extends BaseExtension {\n    constructor(viewer, options) {\n        super(viewer, options);\n    }\n\n    async load() {\n        super.load();\n        console.log('HistogramExtension loaded.');\n        return true;\n    }\n\n    unload() {\n        super.unload();\n        console.log('HistogramExtension unloaded.');\n        return true;\n    }\n\n    async findPropertyValueOccurrences(model, propertyName) {\n        const dbids = await this.findLeafNodes(model);\n        return new Promise(function (resolve, reject) {\n            model.getBulkProperties(dbids, { propFilter: [propertyName] }, function (results) {\n                let histogram = new Map();\n                for (const result of results) {\n                    if (result.properties.length > 0) {\n                        const key = result.properties[0].displayValue;\n                        if (histogram.has(key)) {\n                            histogram.get(key).push(result.dbId);\n                        } else {\n                            histogram.set(key, [result.dbId]);\n                        }\n                    }\n                }\n                resolve(histogram);\n            }, reject);\n        });\n    }\n}\n\nAutodesk.Viewing.theExtensionManager.registerExtension('HistogramExtension', HistogramExtension);\n")),(0,i.kt)("p",null,"Apart from the standard extension scaffolding, we have also defined a ",(0,i.kt)("inlineCode",{parentName:"p"},"findPropertyValueOccurrences"),"\nhelper method that we will later use to collect the desired data (number of occurrences of a specific\nproperty value, and which objects contain this value) for our charts."),(0,i.kt)("p",null,"Now let's import the JavaScript file to our application, and pass the extension ID to the viewer\nconstructor:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import './extensions/LoggerExtension.js';\nimport './extensions/SummaryExtension.js';\n// highlight-start\nimport './extensions/HistogramExtension.js';\n// highlight-end\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const config = {\n    extensions: [\n        'LoggerExtension',\n        'SummaryExtension',\n        // highlight-start\n        'HistogramExtension',\n        // highlight-end\n    ]\n};\nconst viewer = new Autodesk.Viewing.GuiViewer3D(container, config);\n")),(0,i.kt)("h2",{id:"toolbar"},"Toolbar"),(0,i.kt)("p",null,"Next, let's update the ",(0,i.kt)("inlineCode",{parentName:"p"},"HistogramExtension")," class so that it adds two new buttons to the viewer\ntoolbar, one for showing a bar chart, and another one for showing a pie chart:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="wwwroot/extensions/HistogramExtension.js"',title:'"wwwroot/extensions/HistogramExtension.js"'},"import { BaseExtension } from './BaseExtension.js';\n\nclass HistogramExtension extends BaseExtension {\n    constructor(viewer, options) {\n        super(viewer, options);\n        // highlight-start\n        this._barChartButton = null;\n        this._pieChartButton = null;\n        // highlight-end\n    }\n\n    async load() {\n        super.load();\n        console.log('HistogramExtension loaded.');\n        return true;\n    }\n\n    unload() {\n        super.unload();\n        // highlight-start\n        for (const button of [this._barChartButton, this._pieChartButton]) {\n            this.removeToolbarButton(button);\n        }\n        this._barChartButton = this._pieChartButton = null;\n        // highlight-end\n        console.log('HistogramExtension unloaded.');\n        return true;\n    }\n\n    // highlight-start\n    onToolbarCreated() {\n        this._barChartButton = this.createToolbarButton('dashboard-barchart-button', 'https://img.icons8.com/small/32/bar-chart.png', 'Show Property Histogram (Bar Chart)');\n        this._barChartButton.onClick = () => {\n            // TODO\n        };\n        this._pieChartButton = this.createToolbarButton('dashboard-piechart-button', 'https://img.icons8.com/small/32/pie-chart.png', 'Show Property Histogram (Pie Chart)');\n        this._pieChartButton.onClick = () => {\n            // TODO\n        };\n    }\n    // highlight-end\n\n    async findPropertyValueOccurrences(model, propertyName) {\n        const dbids = await this.findLeafNodes(model);\n        return new Promise(function (resolve, reject) {\n            model.getBulkProperties(dbids, { propFilter: [propertyName] }, function (results) {\n                let histogram = new Map();\n                for (const result of results) {\n                    if (result.properties.length > 0) {\n                        const key = result.properties[0].displayValue;\n                        if (histogram.has(key)) {\n                            histogram.get(key).push(result.dbId);\n                        } else {\n                            histogram.set(key, [result.dbId]);\n                        }\n                    }\n                }\n                resolve(histogram);\n            }, reject);\n        });\n    }\n}\n\nAutodesk.Viewing.theExtensionManager.registerExtension('HistogramExtension', HistogramExtension);\n")),(0,i.kt)("h2",{id:"dependency-loading"},"Dependency loading"),(0,i.kt)("p",null,"Our extension will need to somehow fetch the dependencies of the Chart.js library. Since this (getting dependencies\nof a 3rd party library) might be needed in other extensions as well, we will update the ",(0,i.kt)("inlineCode",{parentName:"p"},"BaseExtension")," class with\na couple more helper methods that will handle this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="wwwroot/extensions/BaseExtension.js"',title:'"wwwroot/extensions/BaseExtension.js"'},"export class BaseExtension extends Autodesk.Viewing.Extension {\n    constructor(viewer, options) {\n        super(viewer, options);\n        this._onObjectTreeCreated = (ev) => this.onModelLoaded(ev.model);\n        this._onSelectionChanged = (ev) => this.onSelectionChanged(ev.model, ev.dbIdArray);\n        this._onIsolationChanged = (ev) => this.onIsolationChanged(ev.model, ev.nodeIdArray);\n    }\n\n    load() {\n        this.viewer.addEventListener(Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT, this._onObjectTreeCreated);\n        this.viewer.addEventListener(Autodesk.Viewing.SELECTION_CHANGED_EVENT, this._onSelectionChanged);\n        this.viewer.addEventListener(Autodesk.Viewing.ISOLATE_EVENT, this._onIsolationChanged);\n        return true;\n    }\n\n    unload() {\n        this.viewer.removeEventListener(Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT, this._onObjectTreeCreated);\n        this.viewer.removeEventListener(Autodesk.Viewing.SELECTION_CHANGED_EVENT, this._onSelectionChanged);\n        this.viewer.removeEventListener(Autodesk.Viewing.ISOLATE_EVENT, this._onIsolationChanged);\n        return true;\n    }\n\n    onModelLoaded(model) {}\n\n    onSelectionChanged(model, dbids) {}\n\n    onIsolationChanged(model, dbids) {}\n\n    findLeafNodes(model) {\n        return new Promise(function (resolve, reject) {\n            model.getObjectTree(function (tree) {\n                let leaves = [];\n                tree.enumNodeChildren(tree.getRootId(), function (dbid) {\n                    if (tree.getChildCount(dbid) === 0) {\n                        leaves.push(dbid);\n                    }\n                }, true);\n                resolve(leaves);\n            }, reject);\n        });\n    }\n\n    async findPropertyNames(model) {\n        const dbids = await this.findLeafNodes(model);\n        return new Promise(function (resolve, reject) {\n            model.getBulkProperties(dbids, {}, function (results) {\n                let propNames = new Set();\n                for (const result of results) {\n                    for (const prop of result.properties) {\n                        propNames.add(prop.displayName);\n                    }\n                }\n                resolve(Array.from(propNames.values()));\n            }, reject);\n        });\n    }\n\n    createToolbarButton(buttonId, buttonIconUrl, buttonTooltip) {\n        let group = this.viewer.toolbar.getControl('dashboard-toolbar-group');\n        if (!group) {\n            group = new Autodesk.Viewing.UI.ControlGroup('dashboard-toolbar-group');\n            this.viewer.toolbar.addControl(group);\n        }\n        const button = new Autodesk.Viewing.UI.Button(buttonId);\n        button.setToolTip(buttonTooltip);\n        group.addControl(button);\n        const icon = button.container.querySelector('.adsk-button-icon');\n        if (icon) {\n            icon.style.backgroundImage = `url(${buttonIconUrl})`; \n            icon.style.backgroundSize = `24px`; \n            icon.style.backgroundRepeat = `no-repeat`; \n            icon.style.backgroundPosition = `center`; \n        }\n        return button;\n    }\n\n    removeToolbarButton(button) {\n        const group = this.viewer.toolbar.getControl('dashboard-toolbar-group');\n        group.removeControl(button);\n    }\n\n    // highlight-start\n    loadScript(url, namespace) {\n        if (window[namespace] !== undefined) {\n            return Promise.resolve();\n        }\n        return new Promise(function (resolve, reject) {\n            const el = document.createElement('script');\n            el.src = url;\n            el.onload = resolve;\n            el.onerror = reject;\n            document.head.appendChild(el);\n        });\n    }\n    // highlight-end\n\n    // highlight-start\n    loadStylesheet(url) {\n        return new Promise(function (resolve, reject) {\n            const el = document.createElement('link');\n            el.rel = 'stylesheet';\n            el.href = url;\n            el.onload = resolve;\n            el.onerror = reject;\n            document.head.appendChild(el);\n        });\n    }\n    // highlight-end\n}\n")),(0,i.kt)("h2",{id:"charts"},"Charts"),(0,i.kt)("p",null,"Now let's create another custom panel that will host the actual chart graphics. Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"HistogramPanel.js"),"\nfile in the same folder where ",(0,i.kt)("inlineCode",{parentName:"p"},"HistogramExtension.js")," is located, and add the following code to it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="wwwroot/extensions/HistogramPanel.js"',title:'"wwwroot/extensions/HistogramPanel.js"'},"export class HistogramPanel extends Autodesk.Viewing.UI.DockingPanel {\n    constructor(extension, id, title, options) {\n        super(extension.viewer.container, id, title, options);\n        this.extension = extension;\n        this.container.style.left = (options.x || 0) + 'px';\n        this.container.style.top = (options.y || 0) + 'px';\n        this.container.style.width = (options.width || 500) + 'px';\n        this.container.style.height = (options.height || 400) + 'px';\n        this.container.style.resize = 'none';\n        this.chartType = options.chartType || 'bar'; // See https://www.chartjs.org/docs/latest for all the supported types of charts\n        this.chart = this.createChart();\n    }\n\n    initialize() {\n        this.title = this.createTitleBar(this.titleLabel || this.container.id);\n        this.initializeMoveHandlers(this.title);\n        this.container.appendChild(this.title);\n        this.content = document.createElement('div');\n        this.content.style.height = '350px';\n        this.content.style.backgroundColor = 'white';\n        this.content.innerHTML = `\n            <div class=\"props-container\" style=\"position: relative; height: 25px; padding: 0.5em;\">\n                <select class=\"props\"></select>\n            </div>\n            <div class=\"chart-container\" style=\"position: relative; height: 325px; padding: 0.5em;\">\n                <canvas class=\"chart\"></canvas>\n            </div>\n        `;\n        this.select = this.content.querySelector('select.props');\n        this.canvas = this.content.querySelector('canvas.chart');\n        this.container.appendChild(this.content);\n    }\n\n    createChart() {\n        return new Chart(this.canvas.getContext('2d'), {\n            type: this.chartType,\n            data: {\n                labels: [],\n                datasets: [{ data: [], backgroundColor: [], borderColor: [], borderWidth: 1 }],\n            },\n            options: { maintainAspectRatio: false }\n        });\n    }\n\n    async setModel(model) {\n        const propertyNames = await this.extension.findPropertyNames(model);\n        this.select.innerHTML = propertyNames.map(prop => `<option value=\"${prop}\">${prop}</option>`).join('\\n');\n        this.select.onchange = () => this.updateChart(model, this.select.value);\n        this.updateChart(model, this.select.value);\n    }\n\n    async updateChart(model, propName) {\n        const histogram = await this.extension.findPropertyValueOccurrences(model, propName);\n        const propertyValues = Array.from(histogram.keys());\n        this.chart.data.labels = propertyValues;\n        const dataset = this.chart.data.datasets[0];\n        dataset.label = propName;\n        dataset.data = propertyValues.map(val => histogram.get(val).length);\n        if (dataset.data.length > 0) {\n            const hslaColors = dataset.data.map((val, index) => `hsla(${Math.round(index * (360 / dataset.data.length))}, 100%, 50%, 0.2)`);\n            dataset.backgroundColor = dataset.borderColor = hslaColors;\n        }\n        this.chart.update();\n        this.chart.config.options.onClick = (ev, items) => {\n            if (items.length === 1) {\n                const index = items[0].index;\n                const dbids = histogram.get(propertyValues[index]);\n                this.extension.viewer.isolate(dbids);\n                this.extension.viewer.fitToView(dbids);\n            }\n        };\n    }\n}\n")),(0,i.kt)("p",null,"And finally, let's use the new panel class in our extension:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="wwwroot/extensions/HistogramExtension.js"',title:'"wwwroot/extensions/HistogramExtension.js"'},"import { BaseExtension } from './BaseExtension.js';\n// highlight-start\nimport { HistogramPanel } from './HistogramPanel.js';\n// highlight-end\n\nclass HistogramExtension extends BaseExtension {\n    constructor(viewer, options) {\n        super(viewer, options);\n        this._barChartButton = null;\n        this._pieChartButton = null;\n        // highlight-start\n        this._barChartPanel = null;\n        this._pieChartPanel = null;\n        // highlight-end\n    }\n\n    async load() {\n        super.load();\n        // highlight-start\n        await this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.5.1/chart.min.js', 'Chart');\n        Chart.defaults.plugins.legend.display = false;\n        // highlight-end\n        console.log('HistogramExtension loaded.');\n        return true;\n    }\n\n    unload() {\n        super.unload();\n        for (const button of [this._barChartButton, this._pieChartButton]) {\n            this.removeToolbarButton(button);\n        }\n        this._barChartButton = this._pieChartButton = null;\n        // highlight-start\n        for (const panel of [this._barChartPanel, this._pieChartPanel]) {\n            panel.setVisible(false);\n            panel.uninitialize();\n        }\n        this._barChartPanel = this._pieChartPanel = null;\n        // highlight-end\n        console.log('HistogramExtension unloaded.');\n        return true;\n    }\n\n    onToolbarCreated() {\n        // highlight-start\n        this._barChartPanel = new HistogramPanel(this, 'dashboard-barchart-panel', 'Property Histogram', { x: 10, y: 10, chartType: 'bar' });\n        this._pieChartPanel = new HistogramPanel(this, 'dashboard-piechart-panel', 'Property Histogram', { x: 10, y: 420, chartType: 'doughnut' });\n        // highlight-end\n        this._barChartButton = this.createToolbarButton('dashboard-barchart-button', 'https://img.icons8.com/small/32/bar-chart.png', 'Show Property Histogram (Bar Chart)');\n        this._barChartButton.onClick = () => {\n            // highlight-start\n            this._barChartPanel.setVisible(!this._barChartPanel.isVisible());\n            this._barChartButton.setState(this._barChartPanel.isVisible() ? Autodesk.Viewing.UI.Button.State.ACTIVE : Autodesk.Viewing.UI.Button.State.INACTIVE);\n            if (this._barChartPanel.isVisible() && this.viewer.model) {\n                this._barChartPanel.setModel(this.viewer.model);\n            }\n            // highlight-end\n        };\n        this._pieChartButton = this.createToolbarButton('dashboard-piechart-button', 'https://img.icons8.com/small/32/pie-chart.png', 'Show Property Histogram (Pie Chart)');\n        this._pieChartButton.onClick = () => {\n            // highlight-start\n            this._pieChartPanel.setVisible(!this._pieChartPanel.isVisible());\n            this._pieChartButton.setState(this._pieChartPanel.isVisible() ? Autodesk.Viewing.UI.Button.State.ACTIVE : Autodesk.Viewing.UI.Button.State.INACTIVE);\n            if (this._pieChartPanel.isVisible() && this.viewer.model) {\n                this._pieChartPanel.setModel(this.viewer.model);\n            }\n            // highlight-end\n        };\n    }\n\n    // highlight-start\n    onModelLoaded(model) {\n        super.onModelLoaded(model);\n        if (this._barChartPanel && this._barChartPanel.isVisible()) {\n            this._barChartPanel.setModel(model);\n        }\n        if (this._pieChartPanel && this._pieChartPanel.isVisible()) {\n            this._pieChartPanel.setModel(model);\n        }\n    }\n    // highlight-end\n\n    async findPropertyValueOccurrences(model, propertyName) {\n        const dbids = await this.findLeafNodes(model);\n        return new Promise(function (resolve, reject) {\n            model.getBulkProperties(dbids, { propFilter: [propertyName] }, function (results) {\n                let histogram = new Map();\n                for (const result of results) {\n                    if (result.properties.length > 0) {\n                        const key = result.properties[0].displayValue;\n                        if (histogram.has(key)) {\n                            histogram.get(key).push(result.dbId);\n                        } else {\n                            histogram.set(key, [result.dbId]);\n                        }\n                    }\n                }\n                resolve(histogram);\n            }, reject);\n        });\n    }\n}\n\nAutodesk.Viewing.theExtensionManager.registerExtension('HistogramExtension', HistogramExtension);\n")),(0,i.kt)("h2",{id:"try-it-out"},"Try it out"),(0,i.kt)("p",null,"Alright, time to test our charts extension in the viewer. Click on either of the new toolbar\nbuttons. A new panel should show up with either a bar chart or a pie chart showing the histogram\nof different values appearing for a specific property (which you can select in the dropdown).\nAnd clicking on any bar or pie segment will then isolate all the corresponding design elements\nin the viewer."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Histogram Result",src:n(6955).Z,width:"1500",height:"1063"})))}u.isMDXComponent=!0},6955:function(e,t,n){t.Z=n.p+"assets/images/histogram-result-9b02c73f5cef6f1350e6b5f43cfde6aa.png"}}]);