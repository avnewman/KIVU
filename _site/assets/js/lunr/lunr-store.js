var store = [,{
    "title": "GNSS daily time series results",
    "excerpt":"As of August 2022, the project is operating 7 continuous GNSS stations along the Eastern side of the rift system. The sites are: BNZA, BYAH, KANZ, NYBA, RUBO, IWAW, and KMBR. All data are publicly available through the GAGE facility managed by the EarthScope Consortium and processed by routinely by...","url": "http://localhost:4000/products/GNSS"
  },{
    "title": "InSAR results",
    "excerpt":"Results from InSAR data analysis   coming soon…  ","url": "http://localhost:4000/products/InSAR"
  },{
    "title": "About: Kivu Project",
    "excerpt":"NSF funded research The Grant titled “Collaborative Research: Constraining transient magma intrusion processes in the Nyiragongo-Kivu continental rift zone” supports a three-year effort, which started in January 2022. The PI Team includes: Andrew Newman and Samer Naif at Georgia Tech (NSF Grant: 2150965) Christelle Wauthier at Penn State (NSF Grant:...","url": "http://localhost:4000/about/"
  },{
    "title": "Collaborations and International Connections",
    "excerpt":"Collaborations and International Connections  associated with the Kivu Geophysics Project   More to come soon.  ","url": "http://localhost:4000/connections/"
  },{
    "title": "Field Activities",
    "excerpt":"Field Activities associated with the Kivu Geophysics Project   More to come soon.   Field photos from the 2022 GNSS deployment  ","url": "http://localhost:4000/field/"
  },{
    "title": "Kivu Geophysics Project",
    "excerpt":"During a large eruption at Nyiragongo volcano in the eastern Democratic Republic of Congo, a large rift opening event propagated several km southward toward and possibly below Lake Kivu. Field Activities Field activities for data collection Learn more Products Research results and products Learn more Connections Collaborations and training in...","url": "http://localhost:4000/index.html"
  },{
    "title": "Research results and Products",
    "excerpt":"Proposed Geophysical Network At the right is the originally proposed seismic, geodetic, and magnetotelluric installation plan as it was proposed. Proposed sites are shown atop of a black-and-white SAR Interferogram highlighting the deformation driven by a significant rifting event between the Nyairigongo Volcano and Lake Kivu, and crossing between populated...","url": "http://localhost:4000/products/"
  },{
    "title": null,
    "excerpt":"var idx = lunr(function () { this.field('title') this.field('excerpt') this.field('categories') this.field('tags') this.ref('id') this.pipeline.remove(lunr.trimmer) for (var item in store) { this.add({ title: store[item].title, excerpt: store[item].excerpt, categories: store[item].categories, tags: store[item].tags, id: item }) } }); $(document).ready(function() { $('input#search').on('keyup', function () { var resultdiv = $('#results'); var query = $(this).val().toLowerCase(); var result = idx.query(function...","url": "http://localhost:4000/assets/js/lunr/lunr-en.js"
  },{
    "title": null,
    "excerpt":"step1list = new Array(); step1list[\"ΦΑΓΙΑ\"] = \"ΦΑ\"; step1list[\"ΦΑΓΙΟΥ\"] = \"ΦΑ\"; step1list[\"ΦΑΓΙΩΝ\"] = \"ΦΑ\"; step1list[\"ΣΚΑΓΙΑ\"] = \"ΣΚΑ\"; step1list[\"ΣΚΑΓΙΟΥ\"] = \"ΣΚΑ\"; step1list[\"ΣΚΑΓΙΩΝ\"] = \"ΣΚΑ\"; step1list[\"ΟΛΟΓΙΟΥ\"] = \"ΟΛΟ\"; step1list[\"ΟΛΟΓΙΑ\"] = \"ΟΛΟ\"; step1list[\"ΟΛΟΓΙΩΝ\"] = \"ΟΛΟ\"; step1list[\"ΣΟΓΙΟΥ\"] = \"ΣΟ\"; step1list[\"ΣΟΓΙΑ\"] = \"ΣΟ\"; step1list[\"ΣΟΓΙΩΝ\"] = \"ΣΟ\"; step1list[\"ΤΑΤΟΓΙΑ\"] = \"ΤΑΤΟ\"; step1list[\"ΤΑΤΟΓΙΟΥ\"] = \"ΤΑΤΟ\"; step1list[\"ΤΑΤΟΓΙΩΝ\"] = \"ΤΑΤΟ\"; step1list[\"ΚΡΕΑΣ\"]...","url": "http://localhost:4000/assets/js/lunr/lunr-gr.js"
  },{
    "title": null,
    "excerpt":"var store = [ {%- for c in site.collections -%} {%- if forloop.last -%} {%- assign l = true -%} {%- endif -%} {%- assign docs = c.docs | where_exp:'doc','doc.search != false' -%} {%- for doc in docs -%} {%- if doc.header.teaser -%} {%- capture teaser -%}{{ doc.header.teaser }}{%- endcapture...","url": "http://localhost:4000/assets/js/lunr/lunr-store.js"
  },{
    "title": null,
    "excerpt":"{% if page.xsl %}{% endif %}Jekyll{{ site.time | date_to_xmlschema }}{{ page.url | absolute_url | xml_escape }}{% assign title = site.title | default: site.name %}{% if page.collection != \"posts\" %}{% assign collection = page.collection | capitalize %}{% assign title = title | append: \" | \" | append: collection %}{% endif...","url": "http://localhost:4000/feed.xml"
  },{
    "title": null,
    "excerpt":"{% if page.xsl %} {% endif %} {% assign collections = site.collections | where_exp:'collection','collection.output != false' %}{% for collection in collections %}{% assign docs = collection.docs | where_exp:'doc','doc.sitemap != false' %}{% for doc in docs %} {{ doc.url | replace:'/index.html','/' | absolute_url | xml_escape }} {% if doc.last_modified_at or doc.date...","url": "http://localhost:4000/sitemap.xml"
  },{
    "title": null,
    "excerpt":"Sitemap: {{ \"sitemap.xml\" | absolute_url }} ","url": "http://localhost:4000/robots.txt"
  }]
