(function(){
const NATIONAL={"pov": 8.07, "hdi": 74.2};
const PROV={"nusatenggarabarat": {"name": "Nusa Tenggara Barat", "pov": 11.17, "hdi": 70.93, "cap": [-8.58, 116.12]}, "nusatenggaratimur": {"name": "Nusa Tenggara Timur", "pov": 17.52, "hdi": 67.39, "cap": [-10.18, 123.6]}, "sulawesiutara": {"name": "Sulawesi Utara", "pov": 6.32, "hdi": 75.03, "cap": [1.49, 124.84]}, "sulawesitengah": {"name": "Sulawesi Tengah", "pov": 10.46, "hdi": 71.56, "cap": [-0.9, 119.87]}, "sulawesiselatan": {"name": "Sulawesi Selatan", "pov": 7.24, "hdi": 74.05, "cap": [-5.14, 119.42]}, "sulawesitenggara": {"name": "Sulawesi Tenggara", "pov": 10.02, "hdi": 73.48, "cap": [-3.99, 122.51]}, "gorontalo": {"name": "Gorontalo", "pov": 12.16, "hdi": 71.23, "cap": [0.54, 123.06]}, "sulawesibarat": {"name": "Sulawesi Barat", "pov": 10.0, "hdi": 68.2, "cap": [-2.68, 118.89]}, "maluku": {"name": "Maluku", "pov": 14.91, "hdi": 71.57, "cap": [-3.69, 128.18]}, "malukuutara": {"name": "Maluku Utara", "pov": 5.79, "hdi": 71.03, "cap": [0.74, 127.56]}, "papuabarat": {"name": "Papua Barat", "pov": 18.68, "hdi": 67.02, "cap": [-0.86, 134.06]}, "papuabaratdaya": {"name": "Papua Barat Daya", "pov": 16.49, "hdi": 68.63, "cap": [-0.88, 131.25]}, "papua": {"name": "Papua", "pov": 18.39, "hdi": 73.0, "cap": [-2.53, 140.72]}, "papuaselatan": {"name": "Papua Selatan", "pov": 18.54, "hdi": 67.9, "cap": [-8.49, 140.4]}, "papuatengah": {"name": "Papua Tengah", "pov": 30.41, "hdi": 59.75, "cap": [-3.37, 135.5]}, "papuapegunungan": {"name": "Papua Pegunungan", "pov": 26.34, "hdi": 53.42, "cap": [-4.1, 138.95]}};
const OPPS=[{"id": 1516,"kind": "IPRO","name": "Mautika Mandalika Hotel","name_id": "Mautika Mandalika Hotel","prov": "nusatenggarabarat","kab": "Kab. Lombok Tengah","loc": "KTA Pantai Selatan, Desa Kuta, Kecamatan Pujut, Kabupaten Lombok Tengah","ll": [-8.894,116.284],"llNote": "Kuta village, Pujut (BKPM point falls in the sea east of Sumbawa)","sec": "tour","secRaw": "Tourism","val": 298.7,"valTxt": "Rp 298,7M","irr": "14.65%","npv": "Rp 13,6Rb","pp": "7","year": 2024,"status": "Published","kbli": "55110","desc": "The Lombok-Gili Tramena area located in Central Lombok Regency is included in the . Lombok InternationalNational Tourism Destination (DPN) Airport is the main gateway for tourists visiting Mount Rinjani, Kuta Mandalika Beach, Selong Belanak Beach, and the Mandalika International Circuit.","url": "https://regionalinvestment.bkpm.go.id/peluang_investasi/ipro/1516"},{"id": 1521,"kind": "IPRO","name": "Hotel Resort & Culture - Leisure Park","name_id": "Hotel Resort & Culture - Leisure Park","prov": "nusatenggaratimur","kab": "Kab. Manggarai Barat","loc": "Bukit Pramuka, Desa Gorontalo, Kecamatan Komodo, Kabupaten Manggarai Barat","ll": [-8.47147,119.87667],"llNote": null,"sec": "tour","secRaw": "Tourism","val": 395.5,"valTxt": "Rp 395,5M","irr": "15%","npv": "Rp 126,0M","pp": "7","year": 2023,"status": "Published","kbli": "55110, 56101, 56303, 68112, 91029, 96122","desc": "Labuan Bajo is the capital of West Manggarai Regency, Flores Island which has the main tourist attraction of Komodo National Park and marine tourism/island. A number of tourism infrastructure development has been carried out by the Government to develop Labuan Bajo as a tourism gateway and a world-class accommodation and tourism service center. Tourism sector investment opportunities are also getting bigger and prospective.","url": "https://regionalinvestment.bkpm.go.id/peluang_investasi/ipro/1521"},{"id": 1268,"kind": "PPI","name": "Agribusiness of Integrated Beef Cattle Farm","name_id": "Peternakan Sapi Pedaging Terintegrasi Nusa Tenggara Barat","prov": "nusatenggarabarat","kab": "Kab. Sumbawa","loc": "Desa Jaya Makmur,Desa Sekokat, Desa Suka Damai, Desa Suka Mulya, Desa Labangka, Kecamatan Labangka, Kabupaten Sumbawa Provinsi Nusa Tenggara Barat","ll": [-8.91118,117.77262],"llNote": null,"sec": "agro","secRaw": "Agro Industry","val": 556.2,"valTxt": "Rp 556,2M","irr": "18.02%","npv": "Rp 342,3M","pp": "5.8","year": 2022,"status": "Investor interest registered","kbli": "01191 , 10802 , 01411 , 10110 , 10130","desc": "The agribusiness of the beef cattle project in the West Nusa Tenggara Province is the first step in realizing the government's vision of becoming self-sufficient in meat by 2026. The cattle population in West Nusa Tenggara is the fourth highest in Indonesia, reaching 1.3 million cattle in 2021.","url": "https://regionalinvestment.bkpm.go.id/peluang_investasi/detailed/1268"},{"id": 1273,"kind": "PPI","name": "Integrated Capture Fisheries With Its Processing in Maluku Province","name_id": "Perikanan Tangkap Terintegrasi Dengan Pengolahannya di Provinsi Maluku","prov": "maluku","kab": "Kab. Maluku Tengah","loc": "Desa Tulehu, Kab. Maluku Tengah, Provinsi Maluku","ll": [-3.58532,128.31373],"llNote": null,"sec": "blue","secRaw": "Agro Industry","val": 549.6,"valTxt": "Rp 549,6M","irr": "11.76%","npv": "Rp 67,0M","pp": "9","year": 2022,"status": "Investor interest registered","kbli": "10213 10221","desc": "Located in Rupaitu Hamlet, Tulehu Village, Central Maluku Regency, the location for the development of the capture fisheries processing industry in Maluku has an area of around 10 hectares. The location is strategic because it is close to fishing ports, logistics ports, PLTS, and other basic infrastructure, including accessibility which is accessible with the arterial (provincial) road.","url": "https://regionalinvestment.bkpm.go.id/peluang_investasi/detailed/1273"},{"id": 1272,"kind": "PPI","name": "Agribusiness of Integrated Beef Cattle Farm","name_id": "Agrobisnis Peternakan Sapi Potong Terintegrasi Provinsi Nusa Tenggara Timur","prov": "nusatenggaratimur","kab": "Kab. Kupang","loc": "Desa Fatumonas, Kecamatan Amfoang Tengah","ll": [-9.69389,124.03613],"llNote": null,"sec": "agro","secRaw": "Agro Industry","val": 669.7,"valTxt": "Rp 669,7M","irr": "19.26%","npv": "Rp 694,9M","pp": "6.7","year": 2022,"status": "Investor interest registered","kbli": "01191 10802 01411 10110 10130","desc": "The trend of beef consumption in Indonesia continues to increase along with population growth every year. However, domestic beef production can only meet 62% of its demand. The high demand for beef needs has made Indonesia dependent on beef imports by 38%.The Agribusiness of Integrated Beef Cattle Farm, located in Fatumonas Village, Central Amfoang District, Kupang Regency, East Nusa Tenggara Province, is one of the projects offered by the Ministry of Investment/BKPM to increase food independence and security in In…","url": "https://regionalinvestment.bkpm.go.id/peluang_investasi/detailed/1272"},{"id": 1266,"kind": "PPI","name": "Animal Feed Industry","name_id": "Industri Pengolahan Jagung untuk Pakan Ternak","prov": "gorontalo","kab": "Kab. Gorontalo","loc": "Kawasan Peruntukan Industri Tibawa Pulubala, Kabupaten Gorontalo","ll": [0.63243,122.71758],"llNote": null,"sec": "agro","secRaw": "Industry","val": 797.2,"valTxt": "Rp 797,2M","irr": "16.62%","npv": "Rp 502,0M","pp": "7.6","year": 2022,"status": "Published","kbli": "10801","desc": "The production of available animal feed is projected to be insufficient for domestic feed demand. More than 3,000 million tons of animal feed are still required to meet this need.Corn composes 40-60% of animal feed products. As one of the largest corn producers in Indonesia, Gorontalo has the potential to become a location for developing a corn processing industry for animal feed. A land area of 12.5 Ha in the Industrial Designated Area of Tibawa Pulubala, Gorontalo Regency, is a strategic investment location.","url": "https://regionalinvestment.bkpm.go.id/peluang_investasi/detailed/1266"},{"id": 1277,"kind": "PPI","name": "Soybean Cultivation Crop","name_id": "Tanaman Pangan Budi Daya Kedelai","prov": "sulawesiselatan","kab": "Kab. Maros","loc": "Desa Toddolimae, Kecamatan Tompobulu, Kabupaten Maros","ll": [-5.08422,119.65263],"llNote": null,"sec": "agro","secRaw": "Agro Industry","val": 63.4,"valTxt": "Rp 63,4M","irr": "11.9%","npv": "Rp 12,1M","pp": "10.1","year": 2022,"status": "Published","kbli": "01113","desc": "Indonesia is an agricultural country that has large land and various natural resources. Agriculture is essential in fulfilling basic needs and boosting social, economic, and trade sectors. Indonesia has enormous investment potential in the agricultural sector, especially food crop commodities in the form of soybean since soybean is the 3rd most important commodity after rice and corn.Based on data from the Ministry of Agriculture, Indonesia's soybean production in 2021 reached 200 tons, while the national demand am…","url": "https://regionalinvestment.bkpm.go.id/peluang_investasi/detailed/1277"},{"id": 1279,"kind": "PPI","name": "Seaweed Farming","name_id": "Budi Daya Rumput Laut","prov": "sulawesiselatan","kab": "Kab. Takalar","loc": "Desa Laikang, Kecamatan Mangarabombang, Kabupaten Takalar, Provinsi Sulawesi Selatan","ll": [-5.59897,119.48702],"llNote": null,"sec": "blue","secRaw": "Agro Industry","val": 102.9,"valTxt": "Rp 102,9M","irr": "15.7%","npv": "Rp 38,5M","pp": "4.22","year": 2022,"status": "Investor interest registered","kbli": "03217 46206 52109","desc": "Indonesia is blessed with the largest seaweed land potential in the world. Of the many provinces that provide abundant natural wealth, this is South Sulawesi, home to Indonesia's best seaweed. South Sulawesi Province is the biggest contributor to meeting seaweed needs since it has one of the key areas for seaweed farming, namely Takalar Regency, which has a land potential of more than 8.1 thousand hectares.The total area used for seaweed farming is 184 ha of water and 4 ha of land.","url": "https://regionalinvestment.bkpm.go.id/peluang_investasi/detailed/1279"},{"id": 1274,"kind": "PPI","name": "Fisheries of Integrated Shrimp Aquaculture in West Nusa Tenggara","name_id": "Perikanan Budi Daya Komoditas Udang Nusa Tenggara Barat","prov": "nusatenggarabarat","kab": "Kab. Sumbawa Barat","loc": "Desa Dasan Anyar dan Desa Goa, Kecamatan Jereweh, Kabupaten Sumbawa Barat, Provinsi Nusa Tenggara Barat","ll": [-8.83,116.8103],"llNote": null,"sec": "blue","secRaw": "Agro Industry","val": 507.2,"valTxt": "Rp 507,2M","irr": "14.6%","npv": "Rp 191,3M","pp": "8.1","year": 2022,"status": "Investor interest registered","kbli": "03254  03252 10293 52102","desc": "The Fisheries Project Development Area of Shrimp Farming is located in Dasan Anyar Village and Goa Village, Jereweh District, West Sumbawa Regency, with an area of 176 ha. This development is in the form of integrated intensive shrimp farming activities by building vannamei shrimp hatchery units, vannamei shrimp enlargement, vannamei shrimp freezing industry, and cold storage activities.These activities take into account conformity points such as land suitability, water sources, accessibility, and also other suppor…","url": "https://regionalinvestment.bkpm.go.id/peluang_investasi/detailed/1274"},{"id": 1151,"kind": "PPI","name": "Integrated Coconut Processing Green Industry","name_id": "Industri Hijau Pengolahan Kelapa Terintegrasi","prov": "gorontalo","kab": "Kab. Gorontalo","loc": "Kabupaten Gorontalo, Provinsi Gorontalo","ll": [0.648,122.81664],"llNote": null,"sec": "agro","secRaw": "Industry","val": 643.8,"valTxt": "Rp 643,8M","irr": "17.83%","npv": "Rp 242,7M","pp": "6","year": 2021,"status": "Investor interest registered","kbli": "10773, 32905","desc": "Coconut as a leading commodity in Gorontalo Province has abundant availability. Currently the coconut product derivative industry has not developed optimally, there are still many potentials and opportunities that can still be done. The world market for coconut products and their processed products has experienced rapid development since 2001. The world market value has increased from around US$ 1 billion to US$ 4 billion in 2020.","url": "https://regionalinvestment.bkpm.go.id/peluang_investasi/detailed/1151"},{"id": 1131,"kind": "PPI","name": "Wamena Specialty of Arabica Roasted Bean and Papua Cendrawasih Coffee Powder","name_id": "Kopi Speciality Wamena Arabica Roasted Bean & Kopi Bubuk Papua Cenderawasih","prov": "papua","kab": "Kab. Jayapura","loc": "Kawasan Industri Bonggrang","ll": [-2.59003,140.28456],"llNote": null,"sec": "agro","secRaw": "Agro Industry","val": 351.0,"valTxt": "Rp 351,0M","irr": "11.66%","npv": "Rp 158,2M","pp": "6.25","year": 2021,"status": "Published","kbli": "10761","desc": "Arabica coffee in the mountains of Papua has a sweeter aroma than arabica coffee from other regions in Indonesia. This potential makes Papuan arabica coffee, especially from Wamena, expected by domestic and foreign coffee fans to be the superior type of Papuan specialty coffee. Papuan arabica coffee is no less unique and needs to be better known throughout Indonesia as one of the variations of coffee with a distinctive taste.","url": "https://regionalinvestment.bkpm.go.id/peluang_investasi/detailed/1131"},{"id": 1140,"kind": "PPI","name": "Rhun Island Breda Pala Resort","name_id": "Breda Pala Resort","prov": "maluku","kab": "Kab. Maluku Tengah","loc": "Pengembangan Pariwisata Banda","ll": [-4.54441,129.69199],"llNote": null,"sec": "tour","secRaw": "Tourism","val": 200.1,"valTxt": "Rp 200,1M","irr": "12.15%","npv": "Rp 83,8M","pp": "10.92","year": 2021,"status": "Published","kbli": "55110","desc": "Rhun Island is one of the islands in Banda District. Rhun Island has a history of island swaps, which were offered to be exchanged for Manhattan Island through the Breda agreement because of the wealth of Pala owned by the Banda tourism area, especially Rhun Island.","url": "https://regionalinvestment.bkpm.go.id/peluang_investasi/detailed/1140"},{"id": 1135,"kind": "PPI","name": "Papua Integrated Sago Starch Industry","name_id": "Industri Pengolahan Pati Sagu Terintegrasi","prov": "papua","kab": "Kab. Jayapura","loc": "Pengembangan Food Estate","ll": [-2.52499,139.88251],"llNote": null,"sec": "agro","secRaw": "Industry","val": 660.8,"valTxt": "Rp 660,8M","irr": "12.6%","npv": "Rp 183,1M","pp": "9.5","year": 2021,"status": "Published","kbli": "02130, 10622, 20115","desc": "The integrated sago starch industry is located in Unurum Guay District, Jayapura Regency, Papua Province. The planned production capacity of sago starch is 21 thousand tons/year, with a by-product in the form of briquettes with a capacity of 17 thousand tons/year. The integrated sago starch industry consists of a factory area and supporting facilities covering an area of ​​±10 ha and a plantation area of ​​±15,000 ha located in a Production Forest Area.","url": "https://regionalinvestment.bkpm.go.id/peluang_investasi/detailed/1135"},{"id": 1152,"kind": "PPI","name": "Development of Integrated Nutmeg Plantation with Processing Industry","name_id": "Pengembangan Perkebunan Pala Terintegrasi dengan Industri Pengolahan","prov": "papuabarat","kab": "Kab. Fak-Fak","loc": "Kabupaten Fakfak, Provinsi Papua Barat","ll": [-3.5187,133.00074],"llNote": null,"sec": "agro","secRaw": "Agro Industry","val": 1800.0,"valTxt": "Rp 1,8T","irr": "18%","npv": "Rp 7,3T","pp": "12","year": 2021,"status": "Investor interest registered","kbli": "10772, 20294","desc": "Fakfak Regency is the center of nutmeg in West Papua Province. There is an area of 50,633 Ha suitable for developing an integrated nutmeg plantation with the processing industry. Nutmeg Fakfak already has a Geographical Indication certificate of Fakfak Tomandin Mutmeg No. IDG 000000049 Ministry of Law and Human Rights in 2016, and is a superior variety determined based on Ministry of Agriculture Decree No.","url": "https://regionalinvestment.bkpm.go.id/peluang_investasi/detailed/1152"},{"id": 1147,"kind": "PPI","name": "Cocoa Butter & Cocoa Powder Processing Industry","name_id": "Industri Pengolahan Cocoa Butter & Cocoa Powder","prov": "sulawesibarat","kab": "Kab. Polewali Mandar","loc": "Kabupaten Polewali Mandar, Provinsi Sulawesi Barat","ll": [-3.43308,119.36852],"llNote": null,"sec": "agro","secRaw": "Industry","val": 956.1,"valTxt": "Rp 956,1M","irr": "17.2%","npv": "Rp 481,8M","pp": "7.42","year": 2021,"status": "Published","kbli": "10731","desc": "Cocoa, is a commodity that is part of modern human life today. In addition to being the raw material for making chocolate candy, the fermented cocoa beans are then made into a powder called cocoa powder and also vegetable fat in the form of cocoa butter. Cocoa powder form is widely used as a mixture to make various kinds of food and beverage products, such as milk, jam, bread, and others.","url": "https://regionalinvestment.bkpm.go.id/peluang_investasi/detailed/1147"},{"id": 1146,"kind": "PPI","name": "The Dehegila Resort: Traditional Style Meets Modern Aesthetics","name_id": "The Dehegila Resort: Traditional Style Meets Modern Aesthetics","prov": "malukuutara","kab": "Kab. Pulau Morotai","loc": "Destinasi Pariwisata Prioritas Morotai","ll": [1.9869,128.26965],"llNote": null,"sec": "tour","secRaw": "Tourism","val": 127.4,"valTxt": "Rp 127,4M","irr": "11.95%","npv": "Rp 16,3M","pp": "8.5","year": 2021,"status": "Investor interest registered","kbli": "55110","desc": "The Dehegila Resort is on the Dehegila peninsula close to the coast and overlooks the Pacific Ocean, an international trans route for large ships heading to Australia, the Philippines, and Japan. The basis of consideration of location selection is the status of land ownership that has been certified Right to Build (HGB), the availability of electricity, telecommunications, and water networks that reach the location, and the location adjacent to the center of Daruba City.","url": "https://regionalinvestment.bkpm.go.id/peluang_investasi/detailed/1146"},{"id": 933,"kind": "PPI","name": "Fish Canning Industry","name_id": "Pengembangan Industri Pengalengan Ikan","prov": "papuabaratdaya","kab": "Kab. Sorong","loc": "Kawasan Ekonomi Khusus Sorong","ll": [-1.02994,131.25173],"llNote": null,"sec": "blue","secRaw": "Industry","val": 1700.0,"valTxt": "Rp 1,7T","irr": "27.58%","npv": "Rp 321,4M","pp": "6.7","year": 2020,"status": "Published","kbli": null,"desc": "Sorong SEZ is managed by PT. Malamoi Olom Wobok (MOW) of Sorong SEZ with a shareholding in the Sorong Regency Government. Sorong SEZ is supplied with 100 MW PLTMG with gas pipeline source and supported by 2 units of electricity substation and 5 Telephone BTS. In the area of Sorong SEZ there are Jetty facilities for dry bulk ship transportation as well as a Ro-ro ship pier.","url": "https://regionalinvestment.bkpm.go.id/peluang_investasi/detailed/933"},{"id": 946,"kind": "PPI","name": "Cocoa Processing Industry","name_id": "Industri Pengolahan Biji Cokelat","prov": "sulawesitengah","kab": "Kota Palu","loc": "Kawasan Ekonomi Khusus Palu","ll": [-0.70689,119.88434],"llNote": null,"sec": "agro","secRaw": "Industry","val": 49.8,"valTxt": "Rp 49,8M","irr": "21.86%","npv": "Rp 35,6M","pp": "4.2","year": 2020,"status": "Published","kbli": null,"desc": "Palu SEZ is managed by PT. Build Palu Central Sulawesi with 51% ownership of Palu City Government and Central Sulawesi Provincial Government as much as 49%. The advantages of Palu SEZ are in the availability of raw material sources such as corn, coconut, palm oil, cocoa, round wood and rattan, seaweed and marine fisheries, nickel, primary iron, laterite iron, iron and gold.","url": "https://regionalinvestment.bkpm.go.id/peluang_investasi/detailed/946"},{"id": 868,"kind": "PPI","name": "Potential of Sorong Port As A Sea Highway","name_id": "Potensi Pelabuhan Sorong Sebagai Simpul Tol Laut","prov": "papuabaratdaya","kab": "Kota Sorong","loc": "Kota Sorong","ll": [-0.87747,131.24863],"llNote": null,"sec": "infra","secRaw": "Infrastructure","val": 5400.0,"valTxt": "Rp 5,4T","irr": "11.5%","npv": "Rp 174,3M","pp": "20","year": 2020,"status": "Investor interest registered","kbli": null,"desc": "The Port of Sorong is one of the gateways for sea transportation in West Papua and Papua Provinces that serves the flow of passengers and goods originating from various cities in Indonesia. Plans for the development of the Port of Sorong are being pursued to increase the development of the manufacturing sector and other economic activities. The Sorong Port development plan has a strategic location because it is at the gateway to sea and air transportation on the island of Papua.","url": "https://regionalinvestment.bkpm.go.id/peluang_investasi/detailed/868"},{"id": 934,"kind": "PPI","name": "Matahora Cottage by the Beach","name_id": "Matahora Cottage by the Beach","prov": "sulawesitenggara","kab": "Kab. Wakatobi","loc": "Destinasi Pariwisata Prioritas Wakatobi","ll": [-5.26873,123.62405],"llNote": null,"sec": "tour","secRaw": "Tourism","val": 50.2,"valTxt": "Rp 50,2M","irr": "13.09%","npv": "Rp 48,4M","pp": "5.01","year": 2020,"status": "Published","kbli": null,"desc": "Wakatobi Regency is in the center of the coral triangle which is one of the most diverse marine ecosystems in the world. Wakatobi offers abundant marine wealth and is home to more than 750 identified and diverse coral species. The marine diversity of Wakatobi makes it listed as a biosphere reserve for UNESCO.","url": "https://regionalinvestment.bkpm.go.id/peluang_investasi/detailed/934"},{"id": 950,"kind": "PPI","name": "The Kelors Gateway Hotels and Villas","name_id": "The Kelors Gateway Hotels and Villas","prov": "nusatenggaratimur","kab": "Kab. Manggarai Barat","loc": "Labuan Bajo","ll": [-8.49778,119.87865],"llNote": null,"sec": "tour","secRaw": "Tourism","val": 1100.0,"valTxt": "Rp 1,1T","irr": "12.82%","npv": "Rp 656,8M","pp": "7.77","year": 2020,"status": "Investor interest registered","kbli": null,"desc": "Macang Tanggar is blessed with exceptional natural beauty. It is an extraordinary destination with an outstanding combination of the scenery of beaches, hills, and small islands, perfected with the indigenous cultures. It becomes an alternative tourist destination in Labuan Bajo by promoting environmentally friendly tourism and local wisdom. The uniqueness of jaw-dropping natural landscapes offers sea views which can be immediately served by climbing the hill a little upward.","url": "https://regionalinvestment.bkpm.go.id/peluang_investasi/detailed/950"},{"id": 964,"kind": "PPI","name": "Nickel Cobalt Smelter - Sulfate Industry For Batteries","name_id": "Smelter Nikel Cobalt - Sulfat Industry For Batteries","prov": "sulawesitenggara","kab": "Kab. Kolaka Utara","loc": "Kabupaten Kolaka Utara","ll": [-2.84412,121.0702],"llNote": null,"sec": "mineral","secRaw": "Industry","val": 7600.0,"valTxt": "Rp 7,6T","irr": "12.54%","npv": "Rp 8,3T","pp": "7","year": 2020,"status": "Investor interest registered","kbli": null,"desc": "The nickel smelter factory location plan is in Lawaki Village, Tolala District, North Kolaka Regency. Part of the area is a special Protected Forest Area in the green belt area (mangrove forest on the coast of Tolala Bay). North Kolaka Regency has nickel mineral resource potential of ± 500 million tons, with a reserve capacity of the RKAB in 8 IUPs of 159 million tons ( update : October 2020).","url": "https://regionalinvestment.bkpm.go.id/peluang_investasi/detailed/964"},{"id": 935,"kind": "PPI","name": "Surawaya Beach Marina Area Development","name_id": "Pengembangan Kawasan Marina Pantai Surawaya","prov": "sulawesiutara","kab": "Kab. Minahasa Utara","loc": "Destinasi Pariwisata Prioritas Manado - Likupang","ll": [1.66444,125.10723],"llNote": null,"sec": "tour","secRaw": "Tourism","val": 929.6,"valTxt": "Rp 929,6M","irr": "8.92%","npv": "Rp 32,1M","pp": "5.68","year": 2020,"status": "Published","kbli": null,"desc": "The Surawaya Beach area is located in Wineru Village, East Likupang District, North Minahasa Regency. In its development, Surawaya Beach Area uses the concept of a combination of natural beach tourism and artificial tourism.The concept of Coastal Nature Tourism provides water play facilities such as banana boats, swimming equipment rental, snorkeling, paragliding and shoreline tours such as culinary and souvenir MSME stalls, pedestrians, landscaping, viewing posts, rest areas, public toilets, warning signs, lifegua…","url": "https://regionalinvestment.bkpm.go.id/peluang_investasi/detailed/935"},{"id": 937,"kind": "PPI","name": "Mandalika Convention Hotel and Resort","name_id": "Mandalika Convention Hotel and Resort","prov": "nusatenggarabarat","kab": "Kab. Lombok Tengah","loc": "Mandalika Convention Hotel and Resort","ll": [-8.77238,116.26567],"llNote": null,"sec": "tour","secRaw": "Tourism","val": 468.8,"valTxt": "Rp 468,8M","irr": "19.71%","npv": "Rp 59,1M","pp": "5.85","year": 2020,"status": "Published","kbli": null,"desc": "Mandalika Convention Hall Hotel and Resort is here to meet the needs of international-scale MICE tourism which is designed with a sustainable concept by prioritizing elements of local culture as well as a development location in a strategic area between Mataram City, Lombok International Airport (BIL) and Special Economic Zone (SEZ) Mandalika makes this area a promising economic value.In the area's siteplan, Mandalika Convention Hall Hotel and Resort is on an area of ​​17 hectares.","url": "https://regionalinvestment.bkpm.go.id/peluang_investasi/detailed/937"},{"id": 867,"kind": "PPI","name": "Raja Ampat Live on Board (LoB)","name_id": "Live on Board (LoB) Raja Ampat","prov": "papuabaratdaya","kab": "Kab. Rajaampat","loc": "Destinasi Pariwisata Prioritas Raja Ampat","ll": [-0.98307,130.34634],"llNote": null,"sec": "tour","secRaw": "Tourism","val": 27.7,"valTxt": "Rp 27,7M","irr": "12.68%","npv": "Rp 43,1M","pp": "9.2","year": 2020,"status": "Published","kbli": null,"desc": "LoB (Live on Board) on a traditional phinisi schooners or modern safari boat is a tourism product that offers its guests the opportunity to stay aboard and give a range of experiences and adventures. Almost all tourism components of 5A (Attractions, Activities, Accommodations, Amenities, and Accessibilities) can be fulfilled in this tourism product. A more dominant marine tourism destination is the driving factor for this product so that it is enjoyed more intensively by tourists.","url": "https://regionalinvestment.bkpm.go.id/peluang_investasi/detailed/867"},{"id": 930,"kind": "PPI","name": "Bitung International Port","name_id": "Pelabuhan Internasional Bitung","prov": "sulawesiutara","kab": "Kota Bitung","loc": "Kota Bitung","ll": [1.44102,125.19719],"llNote": null,"sec": "infra","secRaw": "Infrastructure","val": 38800.0,"valTxt": "Rp 38,8T","irr": "9.5%","npv": "Rp 2,9T","pp": "30","year": 2020,"status": "Investor interest registered","kbli": null,"desc": "Bitung Port is one of the ports included in the Development of Integrated and Integrated Port Network in Seven Ports in Indonesia and is also included in the Strategic Priority Project. The concept of Bitung Port development will focus on container loading and unloading activities and logistics aimed at the International market. The development of Bitung Port into an International Hub Port requires the expansion and development of the port.","url": "https://regionalinvestment.bkpm.go.id/peluang_investasi/detailed/930"},{"id": 931,"kind": "PPI","name": "Recycling Copper Industry With Electrolysis Process","name_id": "Industri Daur Ulang Tembaga Dengan Proses Elektrolisis","prov": "sulawesiselatan","kab": "Kab. Takalar","loc": "Kabupaten Takalar","ll": [-5.56885,119.44559],"llNote": null,"sec": "mineral","secRaw": "Industry","val": 3100.0,"valTxt": "Rp 3,1T","irr": "32.73%","npv": "Rp 1,4M","pp": "4.6","year": 2020,"status": "Investor interest registered","kbli": null,"desc": "The priority project offered to KI Takalar is the Copper Recycling Industry Investment Project which utilizes copper waste and scrap raw materials, to produce a product in the form of Copper Cathode through an electrolytic refining process.","url": "https://regionalinvestment.bkpm.go.id/peluang_investasi/detailed/931"},{"id": 944,"kind": "PPI","name": "Smelter Nickel Sulfate Industry","name_id": "Smelter Nikel Sulfate Industry","prov": "malukuutara","kab": "Kab. Halmahera Timur","loc": "Kabupaten Halmahera Timur","ll": [1.1195,128.07069],"llNote": null,"sec": "mineral","secRaw": "Industry","val": 8600.0,"valTxt": "Rp 8,6T","irr": "11.25%","npv": "Rp 8,0T","pp": "10","year": 2020,"status": "Published","kbli": null,"desc": "Nickel is a leading commodity in East Halmahera Regency with one of the largest number of resources and reserves in the world. The smelter factory plan is to be located in Subaim Village, South Wasile-Wasile District.","url": "https://regionalinvestment.bkpm.go.id/peluang_investasi/detailed/944"},{"id": 404,"kind": "PID","name": "Coconut cooking oil processing industry","name_id": "Pengembangan Industri Pengolahan Minyak Goreng Kelapa","prov": "sulawesitengah","kab": "","loc": "","ll": [-0.8315,120.1437],"llNote": null,"sec": "agro","secRaw": "Agriculture","val": 6.5,"valTxt": "Rp 6,5M","irr": "13%","npv": "Rp 176,1Jt","pp": "5","year": 2026,"status": "Regional draft","kbli": "10431, 10432, 10621, 16291, 01261","desc": "Coconut oil processing plant proposed by the Central Sulawesi provincial government. BKPM publishes this listing in Indonesian only.","url": "https://regionalinvestment.bkpm.go.id/daerah/peluang_investasi/404"},{"id": 403,"kind": "PID","name": "Dairy cattle industry","name_id": "INDUSTRI SAPI PERAH","prov": "sulawesitengah","kab": "","loc": "","ll": [-0.8057,120.17008],"llNote": null,"sec": "agro","secRaw": "Agriculture","val": 93.5,"valTxt": "Rp 93,5M","irr": "18.61%","npv": "Rp 82,9M","pp": "6","year": 2026,"status": "Regional draft","kbli": "01412,10510, 01191","desc": "Dairy cattle farming and milk processing proposed by the Central Sulawesi provincial government. BKPM publishes this listing in Indonesian only.","url": "https://regionalinvestment.bkpm.go.id/daerah/peluang_investasi/403"},{"id": 372,"kind": "PID","name": "Construction of a Rice Milling Unit in East Luwu Regency","name_id": "Pembangunan Rice Milling Unit (RMU)","prov": "sulawesiselatan","kab": "","loc": "Pasi-Pasi Village, East Luwu Regency, South Sulawesi Province","ll": [-2.69662,121.09028],"llNote": null,"sec": "agro","secRaw": "Industry","val": 185.9,"valTxt": "Rp 185,9M","irr": "10%","npv": "Rp 90,6M","pp": "11","year": 2025,"status": "Regional draft","kbli": "10631","desc": "The Rice Milling Unit (RMU) Development Project in East Luwu Regency aims to establish a modern and efficient rice milling facility capable of producing high-quality rice while serving as a buffer to support food supply needs in South Sulawesi and Southeast Sulawesi. The project is located in Pasi Pasi Village, Malili District, on a 13.24-hectare land area owned by the East Luwu Regency Government.","url": "https://regionalinvestment.bkpm.go.id/daerah/peluang_investasi/372"},{"id": 210,"kind": "PID","name": "Shrimp Processing Industry of Central Sulawesi Province in 2024","name_id": "Industri Pengolahan Udang Provinsi Sulawesi Tengah Tahun 2024","prov": "sulawesitengah","kab": "","loc": "","ll": [-0.67856,119.73692],"llNote": null,"sec": "blue","secRaw": "Fishery","val": 39.5,"valTxt": "Rp 39,5M","irr": "82.96%","npv": "Rp 13,1M","pp": "10","year": 2024,"status": "Regional draft","kbli": null,"desc": "Central Sulawesi Province has abundant natural resource potential, including potential for mining and mineral materials, gas and oil potential, and mining potential. This potential needs to be developed to improve the economy and in order to realize community welfare while still paying attention to environmental sustainability. This is also followed by the potential that Central Sulawesi Province currently has in the field of marine fisheries.","url": "https://regionalinvestment.bkpm.go.id/daerah/peluang_investasi/210"},{"id": 211,"kind": "PID","name": "The Development of Toronipa Resort, Hotel, and Mice","name_id": "Pengembangan Toronipa Resort Hotel dan MICE","prov": "sulawesitenggara","kab": "","loc": "Toronipa Village, Konawe Regency, Southeast Sulawesi Province","ll": [-3.89673,122.66517],"llNote": null,"sec": "tour","secRaw": "Tourist","val": 1900.0,"valTxt": "Rp 1,9T","irr": "14.7%","npv": "Rp 814,1M","pp": "11","year": 2023,"status": "Regional draft","kbli": "55110, 82301, 56101, 49425, 93299, 93224","desc": "The Toronipa area in Southeast Sulawesi has many beach tourism options, which makes it an ideal place to build a Resort, Hotel, and MICE (Meeting, Incentive, Convention, and Exhibition). The investment includes the construction of a world-class resort, star hotel, and convention center at a cost of approximately IDR 1,85 trillion.","url": "https://regionalinvestment.bkpm.go.id/daerah/peluang_investasi/211"},{"id": 106,"kind": "PID","name": "Beef Cattle Farming","name_id": "Budidaya Ternak Sapi Pedaging","prov": "sulawesiselatan","kab": "Kab. Bone","loc": "Desa Lampoko, Kecamatan Barebbo, Kabupaten Bone, Provinsi Sulawesi Selatan","ll": [-4.62,120.35],"llNote": "Barebbo district, Bone (BKPM record has no valid coordinates)","sec": "agro","secRaw": "Agriculture","val": 36.4,"valTxt": "Rp 36,4M","irr": "18.47%","npv": "Rp 4,3M","pp": "0","year": 2022,"status": "Regional draft","kbli": "01411, 10110","desc": "Investment opportunities in beef cattle farming include fattening efforts for Brahman Cross beef cattle with the in-out concept, production of concentrated feed, and compost fertilizer as supporting activities. The purpose of developing this investment opportunity is to meet the shortage of beef cattle in the local market through cooperation with 5 slaughterhouses in Jombang Regency, reduce unemployment, increase community income, and produce quality superior cattle.","url": "https://regionalinvestment.bkpm.go.id/daerah/peluang_investasi/106"},{"id": 120,"kind": "PID","name": "Integrated Tourism Development in Gunung Botak Area","name_id": "Pengembangan Pariwisata Terintegrasi Dikawasan Gunung Botak","prov": "papuabarat","kab": "","loc": "Momiwaren District, Trans Manokwari Bintuni Road, Gunung Botak Area, South Manokwari Regency, West Papua Province","ll": [-0.86154,134.06297],"llNote": null,"sec": "tour","secRaw": "Tourist","val": 24.6,"valTxt": "Rp 24,6M","irr": "18%","npv": "Rp 6,7M","pp": "6","year": 2022,"status": "Regional draft","kbli": "91034,93231,56303","desc": "Integrated Tourism Development in the Gunung Botak Area: This investment opportunity offers the development of tourism facilities, cafes & restaurants, as well as the construction of public facilities and open spaces in the Gunung Botak Area integrated with cocoa plantations The integrated development of Gunung Botak tourism aims to make it an attractive destination for domestic and international tourists to visit the West Papua Province The local government has prioritized this tourist area for development, ensuri…","url": "https://regionalinvestment.bkpm.go.id/daerah/peluang_investasi/120"},{"id": 118,"kind": "PID","name": "Development of 5-Star Resort Villas and Eco Luxury Lodge","name_id": "Pembangunan Resort Villa Bintang 5 dan Eco Luxury Lodge","prov": "nusatenggarabarat","kab": "Kab. Lombok Tengah","loc": "Kuta Heights Area, Jl Pariwisata, Mandalika, Lombok Tengah District","ll": [-8.88536,116.28134],"llNote": null,"sec": "tour","secRaw": "Tourist","val": 909.5,"valTxt": "Rp 909,5M","irr": "12.68%","npv": "Rp 413,2M","pp": "0","year": 2022,"status": "Regional draft","kbli": "55110","desc": "Construction of a 5-star Villa Resort and Eco Luxury Lodge offers accommodation with special features such as sunrise and sunset views, overlooking Kuta Mandalika Beach, Mandalika Circuit, and Mount Rinjani The resort's location is expected to attract international tourists to NTB, approximately 126,539 people, and domestic tourists totaling 1,249,756 people annually This area is designated as a priority tourism zone by the central government Adequate tourism sites and access serve as supportive factors for resort…","url": "https://regionalinvestment.bkpm.go.id/daerah/peluang_investasi/118"}];
const DONORS=[{"id": "wb-isle1", "donor": "World Bank", "name": "Sustainable Least-cost Electrification-1 (ISLE-1)", "type": "Loan (results-based)", "sector": "Energy access", "amt": "USD 500 m", "usd": 500, "start": "2023", "end": "2029", "status": "Active", "provs": ["maluku", "malukuutara", "nusatenggarabarat", "nusatenggaratimur"], "sites": [], "sum": "Expands access to sustainable, lower-cost electricity in the Maluku and Nusa Tenggara regions and strengthens PLN's operations.", "url": "https://projects.worldbank.org/en/projects-operations/project-detail/P174350", "src": "World Bank project P174350; IATI"}, {"id": "wb-lautra", "donor": "World Bank", "name": "Oceans for Prosperity (LAUTRA)", "type": "Loan", "sector": "Marine & fisheries", "amt": "USD 210 m", "usd": 210, "start": "2023", "end": null, "status": "Active", "provs": ["maluku", "nusatenggaratimur"], "sites": [], "sum": "Strengthens management of marine protected areas and priority fisheries and builds livelihoods for surrounding coastal communities. The World Bank says it covers 11 eastern provinces; only Maluku and NTT are confirmed in the sources found.", "url": "https://projects.worldbank.org/en/projects-operations/project-detail/P173391", "src": "World Bank press release, 23 Mar 2023"}, {"id": "wb-itdp", "donor": "World Bank", "name": "Indonesia Tourism Development Project", "type": "Loan", "sector": "Tourism infrastructure", "amt": "USD 302 m", "usd": 302.1, "start": "2018", "end": null, "status": "Active", "provs": ["nusatenggarabarat"], "sites": [{"n": "Lombok (Mandalika)", "ll": [-8.88, 116.3]}], "sum": "Integrated infrastructure and destination planning for national tourism strategic areas, including Lombok, alongside Borobudur and Lake Toba.", "url": "https://projects.worldbank.org/en/projects-operations/project-detail/P157599", "src": "World Bank project P157599"}, {"id": "wb-csrrp", "donor": "World Bank", "name": "Central Sulawesi Rehabilitation and Reconstruction Project", "type": "Loan", "sector": "Disaster recovery", "amt": "USD 146 m", "usd": 145.7, "start": "2019", "end": "2024", "status": "Completed", "provs": ["sulawesitengah"], "sites": [{"n": "Palu", "ll": [-0.9, 119.87]}], "sum": "Rebuilt and strengthened public facilities and safer housing in areas hit by the 2018 earthquake, tsunami and liquefaction.", "url": "https://projects.worldbank.org/en/projects-operations/project-detail/P169403", "src": "World Bank project P169403; IATI"}, {"id": "wb-livelihoods", "donor": "World Bank", "name": "Inclusive Livelihoods for Poor Rural Communities in Eastern Indonesia", "type": "Grant (JSDF)", "sector": "Livelihoods", "amt": "USD 2.7 m", "usd": 2.73, "start": null, "end": null, "status": "Active", "provs": [], "sites": [], "sum": "Livelihood support for poor rural communities in eastern Indonesia. The World Bank listing does not name the target provinces.", "url": "https://projects.worldbank.org/en/projects-operations/project-detail/P174902", "src": "World Bank project P174902"}, {"id": "adb-seaei2", "donor": "ADB", "name": "Sustainable Energy Access in Eastern Indonesia, Electricity Grid Development Program (Phase 2)", "type": "Loan (results-based)", "sector": "Energy access", "amt": "USD 600 m", "usd": 600, "start": "2020", "end": "2026", "status": "Active", "provs": ["maluku", "malukuutara", "papua", "papuabarat", "papuabaratdaya", "papuaselatan", "papuatengah", "papuapegunungan"], "sites": [], "sum": "Extends PLN's generation, transmission and distribution in Maluku and Papua (and Kalimantan) under the national electricity plan. Scheduled to close June 2026.", "url": "https://www.adb.org/projects/51114-001/main", "src": "ADB project 51114-001; IATI"}, {"id": "adb-seaei1", "donor": "ADB", "name": "Sustainable Energy Access in Eastern Indonesia, Electricity Grid Development Program (Phase 1)", "type": "Loan (results-based)", "sector": "Energy access", "amt": "USD 600 m", "usd": 600, "start": "2017", "end": "2023", "status": "Completed", "provs": ["sulawesiutara", "gorontalo", "sulawesitengah", "sulawesibarat", "sulawesiselatan", "sulawesitenggara", "nusatenggarabarat", "nusatenggaratimur"], "sites": [], "sum": "Built electricity distribution networks to connect households and businesses across Sulawesi and Nusa Tenggara.", "url": "https://www.adb.org/projects/50016-001/main", "src": "ADB project 50016-001; IATI"}, {"id": "adb-eirep1", "donor": "ADB", "name": "Eastern Indonesia Renewable Energy Project (Phase 1): Jeneponto wind", "type": "Private-sector loan", "sector": "Renewable energy", "amt": "USD 56 m", "usd": 56.4, "start": "2017", "end": null, "status": "Active", "provs": ["sulawesiselatan"], "sites": [{"n": "72 MW wind farm, Jeneponto", "ll": [-5.68, 119.73]}], "sum": "Financing for a 72 MW wind power plant in Jeneponto, South Sulawesi.", "url": "https://www.adb.org/projects/51209-001/main", "src": "ADB project 51209-001; IATI"}, {"id": "adb-eirep2", "donor": "ADB", "name": "Eastern Indonesia Renewable Energy Project (Phase 2): Likupang and Lombok solar", "type": "Private-sector loan", "sector": "Renewable energy", "amt": "USD 12.5 m", "usd": 12.5, "start": "2018", "end": null, "status": "Active", "provs": ["sulawesiutara", "nusatenggarabarat"], "sites": [{"n": "21 MW solar, Likupang", "ll": [1.64, 125.08]}, {"n": "7 MW solar, Pringgabaya", "ll": [-8.53, 116.63]}, {"n": "7 MW solar, Selong", "ll": [-8.65, 116.53]}, {"n": "7 MW solar, Sengkol", "ll": [-8.8, 116.3]}], "sum": "A 21 MW solar plant in Likupang, North Sulawesi, and three 7 MW solar plants in East and Central Lombok.", "url": "https://www.adb.org/projects/51209-002/main", "src": "ADB project 51209-002; IATI (four loan tranches)"}, {"id": "adb-shrimp", "donor": "ADB", "name": "Infrastructure Improvement for Shrimp Aquaculture", "type": "Loan", "sector": "Marine & fisheries", "amt": "USD 103 m", "usd": 102.9, "start": "2022", "end": "2028", "status": "Active", "provs": ["sulawesiselatan"], "sites": [], "sum": "Sustainable smallholder shrimp farming with the Ministry of Marine Affairs and Fisheries: inputs, production and post-harvest infrastructure, traceability. South Sulawesi is one of seven provinces.", "url": "https://www.adb.org/projects/55020-001/main", "src": "ADB project 55020-001; IATI"}, {"id": "adb-earr", "donor": "ADB", "name": "Emergency Assistance for Rehabilitation and Reconstruction, Central Sulawesi", "type": "Loan", "sector": "Disaster recovery", "amt": "USD 298 m", "usd": 297.8, "start": "2019", "end": "2026", "status": "Completed", "provs": ["sulawesitengah"], "sites": [{"n": "Palu, Sigi, Donggala", "ll": [-0.95, 119.9]}], "sum": "Build-back-better reconstruction of critical infrastructure after the 2018 Central Sulawesi earthquake and tsunami.", "url": "https://www.adb.org/projects/52316-001/main", "src": "ADB project 52316-001; IATI (two loans)"}, {"id": "adb-coconut", "donor": "ADB", "name": "High-Value Coconut Processing Project", "type": "Private-sector loan", "sector": "Agro-processing", "amt": "USD 5 m", "usd": 5, "start": "2019", "end": null, "status": "Active", "provs": ["sulawesitengah"], "sites": [{"n": "Processing plant near Luwuk", "ll": [-0.95, 122.79]}], "sum": "Virgin coconut oil, desiccated coconut and coconut water plant near Luwuk, Banggai.", "url": "https://www.adb.org/projects/53313-001/main", "src": "ADB project 53313-001; IATI"}, {"id": "adb-flood", "donor": "ADB", "name": "Flood Management in Selected River Basins", "type": "Loan", "sector": "Water & resilience", "amt": "USD 109 m", "usd": 108.7, "start": "2016", "end": "2025", "status": "Completed", "provs": ["maluku"], "sites": [{"n": "Ambon–Seram river basins", "ll": [-3.65, 128.25]}], "sum": "Flood risk management in the Ambon–Seram river basin territory (and in Banten).", "url": "https://www.adb.org/projects/35182-043/main", "src": "ADB project 35182-043; IATI"}, {"id": "adb-sanitation", "donor": "ADB", "name": "Metropolitan Sanitation Management Investment Project", "type": "Loan", "sector": "Urban sanitation", "amt": "USD 80 m", "usd": 80, "start": "2014", "end": "2025", "status": "Completed", "provs": ["sulawesiselatan"], "sites": [{"n": "Makassar sewerage", "ll": [-5.15, 119.43]}], "sum": "Piped sewerage and wastewater treatment for Makassar and four cities in western Indonesia.", "url": "https://www.adb.org/projects/43251-025/main", "src": "ADB project 43251-025; IATI"}, {"id": "adb-tangguh", "donor": "ADB", "name": "Tangguh LNG Expansion (Train 3)", "type": "Private-sector loan", "sector": "Natural gas", "amt": "USD 400 m", "usd": 400, "start": "2016", "end": null, "status": "Active", "provs": ["papuabarat"], "sites": [{"n": "Tangguh LNG, Teluk Bintuni", "ll": [-2.43, 133.13]}], "sum": "Third liquefaction train and related facilities at the Tangguh LNG plant in Teluk Bintuni.", "url": "https://www.adb.org/projects/49222-001/main", "src": "ADB project 49222-001; IATI"}, {"id": "jica-csloan", "donor": "JICA", "name": "Infrastructure Reconstruction Sector Loan in Central Sulawesi", "type": "ODA loan", "sector": "Disaster recovery", "amt": "JPY 27.97 bn", "usd": null, "start": "2020", "end": null, "status": "Active", "provs": ["sulawesitengah"], "sites": [{"n": "Palu bridge, Kalawara–Kulawi road, Lindu access road", "ll": [-1.05, 119.95]}], "sum": "Reconstruction of roads, bridges and other infrastructure damaged by the 2018 earthquake.", "url": "https://www2.jica.go.jp/yen_loan/pdf/en/7044/20200108_10_en.pdf", "src": "JICA press release, 8 Jan 2020; JICA project map, May 2025"}, {"id": "jica-palu4", "donor": "JICA", "name": "Reconstruction of Palu 4 Bridge", "type": "ODA grant", "sector": "Disaster recovery", "amt": "JPY 2.5 bn", "usd": null, "start": "2019", "end": null, "status": "Active", "provs": ["sulawesitengah"], "sites": [{"n": "Palu 4 Bridge", "ll": [-0.86, 119.86]}], "sum": "Rebuilding the Palu 4 bridge, a symbol of the city's recovery, as a grant rather than through the sector loan.", "url": "https://www.jica.go.jp/english/our_work/social_environmental/id/asia/southeast/indonesia/c8h0vm0000e612ow.html", "src": "JICA; JICA project map, May 2025"}, {"id": "jica-tsunami", "donor": "JICA", "name": "Capacity development for earthquake and tsunami analysis and warning", "type": "Technical cooperation", "sector": "Disaster risk reduction", "amt": "n/a", "usd": null, "start": "2022", "end": "2025", "status": "Completed", "provs": ["sulawesitengah"], "sites": [{"n": "Palu", "ll": [-0.89, 119.84]}], "sum": "Strengthens BMKG's earthquake and tsunami analysis and warning dissemination, with Palu as a pilot site.", "url": "https://libportal.jica.go.jp/library/Public/files/plan/in-operation/english/SoutheastAsia/006_Indonesia-e.pdf", "src": "JICA project map, May 2025"}, {"id": "jica-seaweed", "donor": "JICA", "name": "Sustainable seaweed-based functional products for the blue economy", "type": "Technical cooperation", "sector": "Marine & fisheries", "amt": "n/a", "usd": null, "start": "2024", "end": null, "status": "Active", "provs": ["sulawesiselatan"], "sites": [], "sum": "Research and product development for seaweed-based functional products, in Jakarta and South Sulawesi.", "url": "https://libportal.jica.go.jp/library/Public/files/plan/in-operation/english/SoutheastAsia/006_Indonesia-e.pdf", "src": "JICA project map, May 2025"}, {"id": "jica-outerfish", "donor": "JICA", "name": "Development of the Fisheries Sector in Outer Islands", "type": "ODA grant", "sector": "Marine & fisheries", "amt": "n/a", "usd": null, "start": "2018", "end": null, "status": "Active", "provs": ["maluku", "malukuutara", "papua"], "sites": [{"n": "Saumlaki fishing port", "ll": [-7.98, 131.3]}, {"n": "Morotai fishing port", "ll": [2.03, 128.3]}], "sum": "Fishing port and market facilities on outer islands, including Saumlaki (Maluku) and Morotai (North Maluku). JICA lists Papua as a target province but does not name the site.", "url": "https://libportal.jica.go.jp/library/Public/files/plan/in-operation/english/SoutheastAsia/006_Indonesia-e.pdf", "src": "JICA project map, May 2025; Antara"}, {"id": "jica-coastal", "donor": "JICA", "name": "Sustainable system for resilience and innovation in coastal communities", "type": "Technical cooperation", "sector": "Water & resilience", "amt": "n/a", "usd": null, "start": "2022", "end": null, "status": "Active", "provs": ["maluku"], "sites": [{"n": "Ambon", "ll": [-3.7, 128.17]}], "sum": "Coastal community resilience and innovation, with Ambon among four pilot areas.", "url": "https://libportal.jica.go.jp/library/Public/files/plan/in-operation/english/SoutheastAsia/006_Indonesia-e.pdf", "src": "JICA project map, May 2025"}, {"id": "jica-mangrove", "donor": "JICA", "name": "Sustainable mangrove management for ecosystem-based adaptation", "type": "Technical cooperation", "sector": "Climate adaptation", "amt": "n/a", "usd": null, "start": "2025", "end": null, "status": "Active", "provs": ["nusatenggarabarat", "nusatenggaratimur"], "sites": [], "sum": "Mangrove management for climate adaptation in Java, Bali and Nusa Tenggara.", "url": "https://libportal.jica.go.jp/library/Public/files/plan/in-operation/english/SoutheastAsia/006_Indonesia-e.pdf", "src": "JICA project map, May 2025"}];
const SECTORS = {
  agro:    { label:"Agro & food",        v:"--s-agro" },
  tour:    { label:"Tourism",            v:"--s-tour" },
  blue:    { label:"Blue economy",       v:"--s-blue" },
  infra:   { label:"Ports & logistics",  v:"--s-infra" },
  mineral: { label:"Mineral processing", v:"--s-mineral" }
};
const KINDS = {
  IPRO:{ short:"IPRO", long:"Investment Project Ready to Offer (BKPM feasibility study)" },
  PPI: { short:"PPI",  long:"Peta Peluang Investasi (BKPM pre-feasibility profile)" },
  PID: { short:"PID",  long:"Peluang Investasi Daerah (regional government listing)" }
};

const DCOL = { "World Bank":"--d-wb", "ADB":"--d-adb", "JICA":"--d-jica" };
const DSHORT = { "World Bank":"WB", "ADB":"ADB", "JICA":"JICA" };

// ---------- helpers ----------
const $ = s => document.querySelector(s);
const css = v => getComputedStyle(document.documentElement).getPropertyValue(v).trim();
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const fmtIDR = bn => bn == null ? "n/a" : bn >= 1000 ? `Rp ${(bn/1000).toFixed(bn >= 10000 ? 0 : 1)} tn` : bn >= 1 ? `Rp ${bn.toFixed(bn >= 100 ? 0 : 1)} bn` : `Rp ${(bn*1000).toFixed(0)} m`;
// BKPM writes Indonesian units: T = triliun, M = miliar, Jt = juta, Rb = ribu
const parseIDR = s => { const m = /Rp\s*([\d.,]+)\s*(T|M|Jt|Rb)/.exec(s || ""); return m ? parseFloat(m[1].replace(/\./g,"").replace(",", ".")) * {T:1000, M:1, Jt:1e-3, Rb:1e-6}[m[2]] : null; };
const irrNum = o => parseFloat(String(o.irr || "").replace(",", ".")) || null;
const store = {
  get(k, d){ try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch(e){ return d; } },
  set(k, v){ try { localStorage.setItem(k, JSON.stringify(v)); } catch(e){} }
};
const gapRatio = p => PROV[p].pov / NATIONAL.pov;
const gapClass = r => r >= 2 ? "vhi" : r >= 1.4 ? "hi" : "";
const gapLabel = p => {
  const r = gapRatio(p);
  return r >= 1.05 ? `Poverty ${r.toFixed(1)}× national` : r <= .95 ? "Poverty below national" : "Poverty near national";
};
const place = o => [o.kab, PROV[o.prov].name].filter(Boolean).join(", ");

const state = {
  q:"", prov:"", kind:"", ticket:"", sort:"gap",
  sectors:new Set(Object.keys(SECTORS)),
  shortOnly:false, short:new Set(store.get("lw-short2", [])),
  sel:null, layer:"pov", wallace:true, ind:"pov",
  donors:new Set(Object.keys(DCOL)), dstatus:"", dsel:null, showDonors:true
};

// ---------- map ----------
const map = L.map("map", { zoomControl:false, attributionControl:false, minZoom:4, maxZoom:12, zoomSnap:.25 });
L.control.zoom({ position:"topright" }).addTo(map);
const EAST_BOUNDS = L.latLngBounds([-11.2,115.6],[4.2,141.2]);
const wide = () => !matchMedia("(max-width: 860px)").matches;
// keep the region clear of the floating controls and the detail card
const eastPad = () => ({ paddingTopLeft:[16, 90], paddingBottomRight:[wide() && state.sel ? 410 : 16, 16] });
const fitEast = (anim) => anim ? map.flyToBounds(EAST_BOUNDS, { ...eastPad(), duration:.8 }) : map.fitBounds(EAST_BOUNDS, eastPad());
map.fitBounds(EAST_BOUNDS, { padding:[10,10] });

// graticule for orientation (no basemap tiles are allowed in the sandbox)
const grat = L.layerGroup().addTo(map);
function drawGrat(){
  grat.clearLayers();
  const c = css("--sea-grid");
  for (let lng = 95; lng <= 145; lng += 5) L.polyline([[-15,lng],[10,lng]], { color:c, weight:1, interactive:false }).addTo(grat);
  for (let lat = -15; lat <= 10; lat += 5) L.polyline([[lat,90],[lat,150]], { color:c, weight:1, interactive:false, dashArray: lat === 0 ? "6 4" : null }).addTo(grat);
}

const counts = {}; OPPS.forEach(o => counts[o.prov] = (counts[o.prov]||0) + 1);
const dcounts = {}; DONORS.forEach(d => d.provs.forEach(p => dcounts[p] = (dcounts[p]||0) + 1));
const donorsIn = p => DONORS.filter(d => d.provs.includes(p));
// class breaks; higher bucket = wider gap
const BREAKS = { pov:[NATIONAL.pov, 12, 16, 20], hdi:[NATIONAL.hdi, 71, 68, 62] };
function quantile(val, ind){
  const b = BREAKS[ind];
  if (ind === "pov") return val >= b[3] ? 4 : val >= b[2] ? 3 : val >= b[1] ? 2 : val >= b[0] ? 1 : 0;
  return val < b[3] ? 4 : val < b[2] ? 3 : val < b[1] ? 2 : val < b[0] ? 1 : 0;
}
function provStyle(f){
  const id = f.properties.id;
  const east = id !== "OTHER";
  let fill = css("--land-other");
  if (east) fill = state.layer === "none" ? css("--q0") : css("--q" + quantile(PROV[id][state.layer], state.layer));
  const active = state.prov && state.prov === id;
  const dsel = state.dsel && DONORS.find(d => d.id === state.dsel);
  if (east && dsel && dsel.provs.includes(id)) return { fillColor:fill, fillOpacity:.95, color:css(DCOL[dsel.donor]), weight:3, opacity:1 };
  return { fillColor:fill, fillOpacity: east ? .95 : .8, color: active ? css("--ink") : css("--land-line"), weight: active ? 2.2 : .8, opacity:1 };
}
const provLayer = L.geoJSON(PROVINCES, {
  style: provStyle,
  onEachFeature(f, layer){
    const id = f.properties.id;
    if (id === "OTHER"){ layer.options.interactive = false; return; }
    layer.bindTooltip(() => {
      const p = PROV[id];
      return `<b>${p.name}</b><br>Poverty ${p.pov.toFixed(2)}% · HDI ${p.hdi.toFixed(2)}<br>${counts[id]||0} BKPM project${counts[id]===1?"":"s"} · ${dcounts[id]||0} donor programme${dcounts[id]===1?"":"s"}`;
    }, { sticky:true, direction:"top" });
    layer.on("click", () => { setProv(state.prov === id ? "" : id); });
    layer.on("mouseover", () => layer.setStyle({ weight:2, color:css("--ink") }));
    layer.on("mouseout", () => provLayer.resetStyle(layer));
  }
}).addTo(map);

// Wallace Line (approximate, after Wallace 1863)
const WALLACE = [[-11.5,115.72],[-8.75,115.78],[-8.2,115.9],[-6.6,116.9],[-4.6,117.75],[-2.4,118.2],[-0.4,118.95],[1.3,119.6],[3.0,120.6],[4.4,122.2],[5.4,124.4],[6.2,126.6],[6.8,128.5]];
const wallaceLayer = L.layerGroup();
function drawWallace(){
  wallaceLayer.clearLayers();
  L.polyline(WALLACE, { color:css("--wallace"), weight:2, dashArray:"8 6", interactive:false }).addTo(wallaceLayer);
  L.tooltip({ permanent:true, direction:"right", interactive:false, offset:[6,0] })
    .setLatLng([-3.2,118.0]).setContent("Wallace Line").addTo(wallaceLayer);
}
drawWallace(); wallaceLayer.addTo(map);

const markerLayer = L.layerGroup().addTo(map);
const markers = {};
const donorLayer = L.layerGroup().addTo(map);

// ---------- donors ----------
function filteredDonors(){
  return DONORS.filter(d =>
    state.donors.has(d.donor) &&
    (!state.dstatus || d.status === state.dstatus) &&
    (!state.prov || d.provs.includes(state.prov))
  ).sort((a,b) => (a.status === b.status ? 0 : a.status === "Active" ? -1 : 1) || (b.usd||0) - (a.usd||0));
}
function renderDonorMarkers(list){
  donorLayer.clearLayers();
  if (!state.showDonors) return;
  const wideBy = {};
  list.forEach(d => {
    const sited = new Set();
    d.sites.forEach(s => {
      const sel = state.dsel === d.id;
      const m = L.marker(s.ll, { icon:L.divIcon({ className:"", html:`<span class="dmark${sel?" sel":""}" style="--d:var(${DCOL[d.donor]})"></span>`, iconSize:[16,16], iconAnchor:[8,8] }), zIndexOffset: sel ? 900 : 500 });
      m.bindTooltip(`<b>${esc(d.donor)}</b> · ${esc(d.amt)}<br>${esc(d.name)}<br>${esc(s.n)}`, { direction:"top", offset:[0,-6] });
      m.on("click", e => { L.DomEvent.stopPropagation(e); selectDonor(d.id); });
      m.addTo(donorLayer);
      const p = provOf(s.ll); if (p) sited.add(p);
    });
    d.provs.filter(p => !sited.has(p)).forEach(p => (wideBy[p] = wideBy[p] || []).push(d));
  });
  Object.entries(wideBy).forEach(([p, ds]) => {
    const byDonor = Object.keys(DCOL).map(k => [k, ds.filter(d => d.donor === k).length]).filter(x => x[1]);
    const html = `<span class="dbadge">${byDonor.map(([k,n]) => `<i style="--d:var(${DCOL[k]})"></i>${n}`).join(" ")}</span>`;
    const m = L.marker(PROV[p].cap, { icon:L.divIcon({ className:"", html, iconSize:null, iconAnchor:[-8, 26] }), zIndexOffset:400 });
    m.bindTooltip(`<b>${esc(PROV[p].name)}: province-wide programmes</b><br>${ds.map(d => `${DSHORT[d.donor]} · ${esc(d.name)}`).join("<br>")}`, { direction:"top" });
    m.on("click", e => { L.DomEvent.stopPropagation(e); setProv(p); showTab("donors"); });
    m.addTo(donorLayer);
  });
}
// which eastern province a site falls in (point-in-polygon on the simplified outlines)
function inRing(pt, ring){
  let c = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++){
    const [xi, yi] = ring[i], [xj, yj] = ring[j];
    if ((yi > pt[1]) !== (yj > pt[1]) && pt[0] < (xj - xi) * (pt[1] - yi) / (yj - yi) + xi) c = !c;
  }
  return c;
}
function provOf(ll){
  const pt = [ll[1], ll[0]];
  const f = PROVINCES.features.find(f => f.properties.id !== "OTHER" && f.geometry.coordinates.some(poly => inRing(pt, poly[0])));
  return f ? f.properties.id : null;
}
function renderDonorList(list){
  const all = DONORS.length;
  const usd = list.reduce((s,d) => s + (d.usd||0), 0);
  const jpy = list.filter(d => /^JPY/.test(d.amt)).length;
  $("#dsum").textContent = `${list.length} of ${all} programmes${state.prov ? " in " + PROV[state.prov].name : ""} · USD ${usd >= 1000 ? (usd/1000).toFixed(2) + " bn" : Math.round(usd) + " m"} committed${jpy ? ` plus ${jpy} JICA yen loan${jpy>1?"s":""}/grant${jpy>1?"s":""}` : ""}`;
  const ul = $("#dlist");
  if (!list.length){ ul.innerHTML = `<li class="empty">No donor programme in the sources found matches these filters.</li>`; return; }
  ul.innerHTML = list.map(d => `<li class="dcard" tabindex="0" data-id="${d.id}" style="--d:var(${DCOL[d.donor]})" aria-current="${state.dsel===d.id}">
      <div class="top"><h3>${esc(d.name)}</h3><span class="amt">${esc(d.amt)}</span></div>
      <div class="meta"><span class="dpill">${DSHORT[d.donor]}</span><span>${esc(d.type)}</span><span>·</span><span>${[d.start, d.end].filter(Boolean).join("–") || "dates n/a"}</span><span class="pill ${d.status==="Active"?"":"done"}">${d.status}</span></div>
      <div class="meta">${d.provs.length ? d.provs.map(p => esc(PROV[p].name)).join(", ") : "Eastern Indonesia, provinces not stated"}</div>
      <div class="more"><p>${esc(d.sum)}</p>${d.sites.length ? `<p>Sites: ${d.sites.map(s => esc(s.n)).join("; ")}</p>` : ""}<span class="src">Source: ${esc(d.src)} · <a href="${d.url}" target="_blank" rel="noopener">Open ↗</a></span></div>
    </li>`).join("");
}
function selectDonor(id){
  state.dsel = state.dsel === id ? null : id;
  showTab("donors");
  render();
  const d = DONORS.find(x => x.id === state.dsel);
  if (!d) return;
  const lyr = provLayer.getLayers().filter(l => d.provs.includes(l.feature.properties.id));
  const pts = d.sites.map(s => L.latLng(s.ll));
  const b = lyr.length ? L.featureGroup(lyr).getBounds() : pts.length ? L.latLngBounds(pts) : null;
  if (b) map.flyToBounds(b, { paddingTopLeft:[30,90], paddingBottomRight:[wide() && state.sel ? 410 : 30, 30], maxZoom:8, duration:.8 });
  document.querySelector(`.dcard[data-id="${d.id}"]`)?.scrollIntoView({ block:"nearest" });
}

// ---------- filtering ----------
const ticketBucket = o => o.val == null ? "" : o.val < 100 ? "s" : o.val <= 1000 ? "m" : "l";
function filtered(){
  const q = state.q.trim().toLowerCase();
  let r = OPPS.filter(o =>
    state.sectors.has(o.sec) &&
    (!state.prov || o.prov === state.prov) &&
    (!state.kind || o.kind === state.kind) &&
    (!state.ticket || ticketBucket(o) === state.ticket) &&
    (!state.shortOnly || state.short.has(o.id)) &&
    (!q || [o.name,o.name_id,o.kab,o.loc,PROV[o.prov].name,SECTORS[o.sec].label,o.secRaw,o.desc].join(" ").toLowerCase().includes(q))
  );
  const by = {
    gap:(a,b) => PROV[b.prov].pov - PROV[a.prov].pov || (b.val||0) - (a.val||0),
    val:(a,b) => (b.val||0) - (a.val||0),
    irr:(a,b) => (irrNum(b)||0) - (irrNum(a)||0),
    year:(a,b) => (b.year||0) - (a.year||0) || (b.val||0) - (a.val||0)
  }[state.sort];
  return r.sort(by);
}

// ---------- render ----------
function renderKPIs(list){
  const tot = list.reduce((s,o)=>s+(o.val||0),0);
  const irrs = list.map(irrNum).filter(x => x != null && x < 60).sort((a,b)=>a-b);
  const med = irrs.length ? (irrs.length % 2 ? irrs[(irrs.length-1)/2] : (irrs[irrs.length/2-1]+irrs[irrs.length/2])/2) : null;
  $("#k-count").textContent = list.length;
  $("#k-val").textContent = list.length ? fmtIDR(tot) : "–";
  $("#k-irr").textContent = med == null ? "–" : med.toFixed(1) + "%";
  $("#k-prov").textContent = new Set(list.map(o=>o.prov)).size;
}
function renderChips(){
  const n = {}; OPPS.forEach(o => n[o.sec] = (n[o.sec]||0) + 1);
  $("#chips").innerHTML = Object.entries(SECTORS).map(([k,s]) => `<button class="chip" aria-pressed="${state.sectors.has(k)}" data-sec="${k}" style="--c:var(${s.v})"><i></i>${s.label} <small>${n[k]||0}</small></button>`).join("");
}
function renderList(list){
  const ul = $("#list");
  $("#lm-count").textContent = `${list.length} of ${OPPS.length} shown${state.prov ? " · " + PROV[state.prov].name : ""}`;
  $("#b-short").textContent = `${state.shortOnly ? "Showing shortlist" : "Shortlist"} (${state.short.size})`;
  $("#b-short").setAttribute("aria-pressed", state.shortOnly);
  if (!list.length){
    ul.innerHTML = `<li class="empty">${state.prov && !counts[state.prov] ? `BKPM lists no projects in ${esc(PROV[state.prov].name)} yet.` : "No projects match these filters. Widen the sector or value filters, or reset."}</li>`;
    return;
  }
  ul.innerHTML = list.map(o => `<li class="opp" tabindex="0" data-id="${o.id}" style="--c:var(${SECTORS[o.sec].v})" aria-current="${state.sel===o.id}">
      <span class="dot"></span>
      <h3>${esc(o.name)}</h3>
      <span class="amt">${fmtIDR(o.val)}</span>
      <span class="sub">${esc(place(o))}${state.short.has(o.id) ? " · ★" : ""}</span>
      <span class="need"><span class="pill gap ${gapClass(gapRatio(o.prov))}">${gapLabel(o.prov)}</span><span class="pill">${o.kind} ${o.year||""}</span>${o.irr ? `<span class="pill mono">IRR ${esc(o.irr)}</span>` : ""}</span>
    </li>`).join("");
}
function renderMarkers(list){
  markerLayer.clearLayers();
  list.forEach(o => {
    const sel = state.sel === o.id;
    const radius = 5 + Math.min(14, Math.sqrt(o.val || 1) * .32);
    const m = L.circleMarker(o.ll, {
      radius: sel ? radius + 3 : radius,
      fillColor: css(SECTORS[o.sec].v), fillOpacity: .9,
      color: sel ? css("--ink") : css("--surface"), weight: sel ? 3 : 1.6,
      dashArray: o.kind === "PID" ? "3 2" : null
    });
    m.bindTooltip(`<b>${esc(o.name)}</b><br>${esc(place(o))}<br>${fmtIDR(o.val)}${o.irr ? " · IRR " + esc(o.irr) : ""} · ${o.kind}`, { direction:"top" });
    m.on("click", e => { L.DomEvent.stopPropagation(e); select(o.id, false); });
    m.addTo(markerLayer);
    markers[o.id] = m;
  });
  if (state.sel && markers[state.sel]) markers[state.sel].bringToFront();
}
function renderLegend(){
  const ind = state.layer;
  const q = [0,1,2,3,4].map(i => `<span style="background:var(--q${i})"></span>`).join("");
  const b = BREAKS[ind];
  let body = "";
  if (ind === "pov") body = `<h4>Poverty rate, % (BPS, Mar 2026)</h4><div class="ramp">${q}</div><div class="rampl"><span>&lt;${b[0]}</span><span>${b[0]}</span><span>${b[1]}</span><span>${b[2]}</span><span>${b[3]}+</span></div>`;
  else if (ind === "hdi") body = `<h4>Human Development Index (BPS, 2024)</h4><div class="ramp">${q}</div><div class="rampl"><span>${b[0]}+</span><span>&lt;${b[0]}</span><span>&lt;${b[1]}</span><span>&lt;${b[2]}</span><span>&lt;${b[3]}</span></div>`;
  else body = `<h4>Shading off</h4>`;
  const wl = state.wallace ? `<div class="wl"><svg width="26" height="6"><line x1="0" y1="3" x2="26" y2="3" stroke="var(--wallace)" stroke-width="2" stroke-dasharray="6 4"/></svg>Wallace Line, biogeographic boundary</div>` : "";
  const dl = state.showDonors ? `<div class="wl">${Object.keys(DCOL).map(k => `<span class="dmark" style="--d:var(${DCOL[k]});width:9px;height:9px;border-width:1px"></span>&nbsp;${DSHORT[k]}`).join("&ensp;")}</div><div class="wl" style="margin-top:2px">Diamond = donor site · badge = province-wide count</div>` : "";
  $("#legend").innerHTML = body + dl +
    `<div class="wl"><svg width="34" height="14"><circle cx="6" cy="7" r="4" fill="var(--ink-3)"/><circle cx="24" cy="7" r="6.5" fill="var(--ink-3)"/></svg>Circle size = investment value</div>` +
    `<div class="wl"><svg width="34" height="14"><circle cx="7" cy="7" r="5" fill="none" stroke="var(--ink-3)" stroke-width="1.6" stroke-dasharray="3 2"/></svg>Dashed = regional (PID) listing</div>` + wl +
    `<div class="src">Indonesia: poverty ${NATIONAL.pov}%, HDI ${NATIONAL.hdi}. Projects: BKPM PIR.</div>`;
}
function renderDetail(){
  const box = $("#detail");
  const o = OPPS.find(x => x.id === state.sel);
  if (!o){ box.hidden = true; return; }
  const p = PROV[o.prov];
  const r = gapRatio(o.prov);
  const maxPov = 35;
  const inShort = state.short.has(o.id);
  box.style.setProperty("--c", `var(${SECTORS[o.sec].v})`);
  box.innerHTML = `
    <div class="hd">
      <div class="eyebrow"><i></i>${SECTORS[o.sec].label}<span class="pill" title="${esc(KINDS[o.kind].long)}">${o.kind} ${o.year||""}</span></div>
      <h2>${esc(o.name)}</h2>
      <div class="loc">${esc(place(o))}</div>
      <button class="close" id="d-close" aria-label="Close details">✕</button>
    </div>
    <div class="bd">
      <div class="facts">
        <div><small>Investment value</small><b>${fmtIDR(o.val)}</b></div>
        <div><small>IRR</small><b>${esc(o.irr || "n/a")}</b></div>
        <div><small>NPV</small><b>${o.npv ? fmtIDR(parseIDR(o.npv)) : "n/a"}</b></div>
        <div><small>Payback</small><b>${o.pp ? esc(o.pp) + " yrs" : "n/a"}</b></div>
      </div>
      <div><h5>About the project</h5><p>${esc(o.desc)}</p></div>
      <div class="gapbox">
        <h5 style="margin:0">Development gap in ${esc(p.name)}</h5>
        <div class="gapbar" title="Poverty rate against national average"><b style="width:${Math.min(100,p.pov/maxPov*100)}%"></b><em style="left:${NATIONAL.pov/maxPov*100}%"></em></div>
        <div class="gaptxt"><span>Poverty ${p.pov.toFixed(2)}% (${r.toFixed(1)}× national ${NATIONAL.pov}%)</span><span>HDI ${p.hdi.toFixed(2)}</span></div>
      </div>
      <dl>
        <dt>Listing</dt><dd>${esc(KINDS[o.kind].long)}</dd>
        <dt>Status</dt><dd>${esc(o.status || "n/a")}</dd>
        ${o.loc ? `<dt>Site</dt><dd>${esc(o.loc)}</dd>` : ""}
        <dt>BKPM sector</dt><dd>${esc(o.secRaw)}</dd>
        ${o.kbli ? `<dt>KBLI</dt><dd>${esc(o.kbli)}</dd>` : ""}
        ${o.name_id && o.name_id !== o.name ? `<dt>Nama</dt><dd>${esc(o.name_id)}</dd>` : ""}
      </dl>
      ${o.llNote ? `<p class="fine">Map point adjusted: ${esc(o.llNote)}.</p>` : ""}
      <div><h5>Donor programmes in ${esc(p.name)}</h5>${donorsIn(o.prov).length
        ? `<ul class="dlist">${donorsIn(o.prov).map(d => `<li><span class="dpill" style="--d:var(${DCOL[d.donor]})">${DSHORT[d.donor]}</span><button data-donor="${d.id}">${esc(d.name)} <span class="fine">(${d.status.toLowerCase()})</span></button></li>`).join("")}</ul>`
        : `<p class="fine">No World Bank, ADB or JICA programme naming this province was found.</p>`}</div>
      <div class="actions">
        <a class="btn primary" href="${o.url}" target="_blank" rel="noopener">Open on BKPM PIR ↗</a>
        <button class="btn" id="d-short" aria-pressed="${inShort}">${inShort ? "★ Shortlisted" : "☆ Shortlist"}</button>
        <button class="btn" id="d-copy">Copy brief</button>
      </div>
      <p class="fine">Source: Kementerian Investasi dan Hilirisasi/BKPM. Figures are feasibility estimates as published, not offers.</p>
    </div>`;
  box.hidden = false;
  $("#d-close").onclick = () => select(null);
  $("#d-short").onclick = () => toggleShort(o.id);
  $("#d-copy").onclick = () => copyText(brief([o]), "Brief copied");
  box.querySelectorAll("[data-donor]").forEach(b => b.onclick = () => selectDonor(b.dataset.donor));
}
function renderChart(){
  const ind = state.ind;
  const rows = Object.entries(PROV).map(([id,p]) => ({ id, name:p.name, v:p[ind], n:counts[id]||0 }))
    .sort((a,b) => ind === "pov" ? b.v - a.v : a.v - b.v);
  const W = 340, rowH = 24, top = 20, left = 118, right = 92, H = top + rows.length*rowH + 22;
  const max = ind === "pov" ? 35 : 80, min = ind === "pov" ? 0 : 50;
  const x = v => left + (v - min) / (max - min) * (W - left - right);
  const nat = NATIONAL[ind];
  let s = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${ind==="pov"?"Poverty rate":"HDI"} by province with project counts">`;
  const ticks = ind === "pov" ? [0,10,20,30] : [50,60,70,80];
  ticks.forEach(t => s += `<line x1="${x(t)}" x2="${x(t)}" y1="${top-4}" y2="${H-18}" stroke="var(--line)"/><text x="${x(t)}" y="${H-5}" text-anchor="middle" class="num" style="fill:var(--ink-3)">${t}</text>`);
  s += `<text x="${W-40}" y="${top-8}" text-anchor="end" style="font-size:10px;fill:var(--ink-3)">BKPM</text><text x="${W-4}" y="${top-8}" text-anchor="end" style="font-size:10px;fill:var(--ink-3)">donor</text>`;
  rows.forEach((r,i) => {
    const y = top + i*rowH;
    const q = quantile(r.v, ind);
    const active = state.prov === r.id;
    s += `<g class="row bar" data-prov="${r.id}" tabindex="0">
      <rect x="0" y="${y}" width="${W}" height="${rowH}" fill="${active ? "var(--surface-2)" : "transparent"}"/>
      <text x="${left-8}" y="${y+rowH/2+4}" text-anchor="end" style="${active?"fill:var(--ink);font-weight:600":""}">${r.name}</text>
      <rect x="${x(min)}" y="${y+5}" width="${Math.max(2,x(r.v)-x(min))}" height="${rowH-10}" rx="3" fill="var(--q${q})" stroke="var(--line)" stroke-width=".5"/>
      <text x="${x(r.v)+5}" y="${y+rowH/2+4}" class="num">${r.v.toFixed(ind==="pov"?1:1)}</text>
      <text x="${W-40}" y="${y+rowH/2+4}" text-anchor="end" class="num" style="${r.n ? "" : "fill:var(--q4);font-weight:600"}">${r.n || "none"}</text>
      <text x="${W-4}" y="${y+rowH/2+4}" text-anchor="end" class="num" style="${dcounts[r.id] ? "" : "fill:var(--q4);font-weight:600"}">${dcounts[r.id] || "none"}</text>
    </g>`;
  });
  s += `<line x1="${x(nat)}" x2="${x(nat)}" y1="${top-8}" y2="${H-18}" stroke="var(--ink)" stroke-width="1.5" stroke-dasharray="3 3"/>
        <text x="${x(nat)}" y="${top-8}" text-anchor="middle" class="num" style="font-size:10px">Indonesia ${nat}</text></svg>`;
  $("#chart").innerHTML = s;
  $("#chart").querySelectorAll(".bar").forEach(g => {
    const go = () => setProv(state.prov === g.dataset.prov ? "" : g.dataset.prov);
    g.addEventListener("click", go);
    g.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " "){ e.preventDefault(); go(); } });
  });
  $("#g-lead").textContent = ind === "pov"
    ? `Share of population below the poverty line (BPS, March 2026), against the national ${NATIONAL.pov}%. Right columns count BKPM projects and World Bank, ADB and JICA programmes. Click a row to focus the map.`
    : `Human Development Index (BPS, 2024), lowest first, against the national ${NATIONAL.hdi}. Right columns count BKPM projects and World Bank, ADB and JICA programmes. Click a row to focus the map.`;
  const none = Object.keys(PROV).filter(id => !counts[id]).sort((a,b) => PROV[b].pov - PROV[a].pov);
  const donorNote = id => { const ds = donorsIn(id); return ds.length ? `only ${ds.map(d => DSHORT[d.donor] + " " + d.sector.toLowerCase()).join(", ")}` : "no donor programme found"; };
  $("#g-callout").innerHTML = none.length
    ? `<b>${none.length} provinces have no BKPM listing:</b> ${none.map(id => `${esc(PROV[id].name)} (${PROV[id].pov.toFixed(1)}% poor; ${esc(donorNote(id))})`).join(", ")}. They include the poorest provinces in the country. These are the gaps a city-level project pipeline from KotaBerdaya could fill.`
    : "Every eastern province has at least one BKPM listing.";
}
function render(){
  const list = filtered();
  if (state.sel && !list.some(o => o.id === state.sel)) state.sel = null;
  renderKPIs(list); renderList(list); renderMarkers(list); renderDetail(); renderChart();
  const dl = filteredDonors();
  if (state.dsel && !dl.some(d => d.id === state.dsel)) state.dsel = null;
  renderDonorList(dl); renderDonorMarkers(dl);
  $("#d-prov").value = state.prov;
  provLayer.setStyle(provStyle);
}

// ---------- actions ----------
function select(id, fly = true){
  state.sel = id;
  render();
  if (id && fly){
    const o = OPPS.find(x => x.id === id);
    map.flyTo(o.ll, Math.max(map.getZoom(), 7), { duration: matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : .8 });
  }
  if (id && !wide()) $("#detail").scrollTop = 0;
}
function setProv(id){
  state.prov = id; $("#f-prov").value = id;
  render();
  if (id){
    const lyr = provLayer.getLayers().filter(l => l.feature.properties.id === id);
    map.flyToBounds(L.featureGroup(lyr).getBounds(), { paddingTopLeft:[30,90], paddingBottomRight:[wide() && state.sel ? 410 : 30, 30], maxZoom:7.5, duration:.8 });
  } else fitEast(true);
}
function toggleShort(id){
  state.short.has(id) ? state.short.delete(id) : state.short.add(id);
  store.set("lw-short2", [...state.short]);
  render();
}
function brief(list){
  return list.map(o => {
    const p = PROV[o.prov];
    return `${o.name} (${place(o)})\n${KINDS[o.kind].long}, ${o.year} | ${SECTORS[o.sec].label}\nInvestment ${fmtIDR(o.val)} | IRR ${o.irr || "n/a"} | NPV ${o.npv ? fmtIDR(parseIDR(o.npv)) : "n/a"} | Payback ${o.pp || "n/a"} yrs\n${o.desc}\nProvince: poverty ${p.pov}% (national ${NATIONAL.pov}%), HDI ${p.hdi}\nSource: ${o.url}`;
  }).join("\n\n");
}
let toastT;
function toast(msg){ const t = $("#toast"); t.textContent = msg; t.hidden = false; clearTimeout(toastT); toastT = setTimeout(() => t.hidden = true, 1800); }
function copyText(txt, ok){
  try { navigator.clipboard.writeText(txt).then(() => toast(ok), () => toast("Copy is blocked here. Use the BKPM link instead.")); }
  catch(e){ toast("Copy is blocked here. Use the BKPM link instead."); }
}
function showTab(name){
  document.querySelectorAll("[role=tab]").forEach(x => x.setAttribute("aria-selected", x.dataset.tab === name));
  ["opps","donors","gap","about"].forEach(k => $("#p-"+k).hidden = k !== name);
  store.set("lw-tab", name);
}

// ---------- controls ----------
const provSel = $("#f-prov");
Object.entries(PROV).sort((a,b) => a[1].name.localeCompare(b[1].name))
  .forEach(([id,p]) => provSel.insertAdjacentHTML("beforeend", `<option value="${id}">${esc(p.name)} (${counts[id]||0})</option>`));
provSel.addEventListener("change", e => setProv(e.target.value));
const dProvSel = $("#d-prov");
Object.entries(PROV).sort((a,b) => a[1].name.localeCompare(b[1].name))
  .forEach(([id,p]) => dProvSel.insertAdjacentHTML("beforeend", `<option value="${id}">${esc(p.name)} (${dcounts[id]||0})</option>`));
dProvSel.addEventListener("change", e => setProv(e.target.value));
$("#d-status").addEventListener("change", e => { state.dstatus = e.target.value; render(); });
function renderDChips(){
  $("#dchips").innerHTML = Object.keys(DCOL).map(k => `<button class="chip" aria-pressed="${state.donors.has(k)}" data-donor="${k}" style="--c:var(${DCOL[k]})"><i></i>${k} <small>${DONORS.filter(d => d.donor === k).length}</small></button>`).join("");
}
renderDChips();
$("#dchips").addEventListener("click", e => {
  const b = e.target.closest(".chip"); if (!b) return;
  const k = b.dataset.donor;
  state.donors.has(k) ? state.donors.delete(k) : state.donors.add(k);
  if (!state.donors.size) state.donors = new Set(Object.keys(DCOL));
  renderDChips(); render();
});
$("#dlist").addEventListener("click", e => { if (e.target.closest("a")) return; const li = e.target.closest(".dcard"); if (li) selectDonor(li.dataset.id); });
$("#dlist").addEventListener("keydown", e => { const li = e.target.closest(".dcard"); if (li && (e.key === "Enter" || e.key === " ") && !e.target.closest("a")){ e.preventDefault(); selectDonor(li.dataset.id); } });
$("#b-donors").addEventListener("click", e => {
  state.showDonors = !state.showDonors; e.currentTarget.setAttribute("aria-pressed", state.showDonors);
  render(); renderLegend();
});
renderChips();
$("#chips").addEventListener("click", e => {
  const b = e.target.closest(".chip"); if (!b) return;
  const k = b.dataset.sec;
  // first click isolates a sector; later clicks toggle
  if (state.sectors.size === Object.keys(SECTORS).length) state.sectors = new Set([k]);
  else if (state.sectors.has(k)) { state.sectors.delete(k); if (!state.sectors.size) state.sectors = new Set(Object.keys(SECTORS)); }
  else state.sectors.add(k);
  renderChips(); render();
});
$("#q").addEventListener("input", e => { state.q = e.target.value; render(); });
$("#f-sort").addEventListener("change", e => { state.sort = e.target.value; render(); });
$("#f-kind").addEventListener("change", e => { state.kind = e.target.value; render(); });
$("#f-ticket").addEventListener("change", e => { state.ticket = e.target.value; render(); });
$("#b-short").addEventListener("click", () => {
  if (!state.short.size){ toast("Star a project to start a shortlist"); return; }
  state.shortOnly = !state.shortOnly; render();
});
$("#b-reset").addEventListener("click", () => {
  Object.assign(state, { q:"", prov:"", kind:"", ticket:"", shortOnly:false, sel:null, dsel:null, sectors:new Set(Object.keys(SECTORS)) });
  $("#q").value = ""; $("#f-kind").value = ""; $("#f-ticket").value = ""; provSel.value = "";
  renderChips(); render(); fitEast(true);
});
$("#b-src").addEventListener("click", () => { showTab("about"); $("#sources").scrollIntoView({ block:"start" }); });
$("#list").addEventListener("click", e => { const li = e.target.closest(".opp"); if (li) select(+li.dataset.id); });
$("#list").addEventListener("keydown", e => { const li = e.target.closest(".opp"); if (li && (e.key === "Enter" || e.key === " ")){ e.preventDefault(); select(+li.dataset.id); } });
document.querySelectorAll("[data-layer]").forEach(b => b.addEventListener("click", () => {
  state.layer = b.dataset.layer;
  document.querySelectorAll("[data-layer]").forEach(x => x.setAttribute("aria-pressed", x === b));
  provLayer.setStyle(provStyle); renderLegend();
}));
$("#b-wallace").addEventListener("click", e => {
  state.wallace = !state.wallace; e.currentTarget.setAttribute("aria-pressed", state.wallace);
  state.wallace ? wallaceLayer.addTo(map) : map.removeLayer(wallaceLayer);
  renderLegend();
});
document.querySelectorAll("[data-ind]").forEach(b => b.addEventListener("click", () => {
  state.ind = b.dataset.ind;
  document.querySelectorAll("[data-ind]").forEach(x => x.setAttribute("aria-pressed", x === b));
  renderChart();
}));
document.querySelectorAll("[role=tab]").forEach(t => t.addEventListener("click", () => showTab(t.dataset.tab)));
const savedTab = store.get("lw-tab", "opps");
if (savedTab !== "opps") showTab(savedTab);
map.on("click", () => { if (state.sel) select(null); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && state.sel) select(null); });

// re-tint on theme change (map colors are read from CSS tokens)
const retint = () => { drawGrat(); drawWallace(); render(); renderLegend(); };
matchMedia("(prefers-color-scheme: dark)").addEventListener?.("change", retint);
new MutationObserver(retint).observe(document.documentElement, { attributes:true, attributeFilter:["data-theme"] });

drawGrat(); renderLegend();
if (wide()) state.sel = filtered()[0]?.id ?? null;
render();
// leaflet needs a size recalc once fonts and layout settle
map.invalidateSize(); fitEast(false);
setTimeout(() => { map.invalidateSize(); fitEast(false); }, 250);
})();
