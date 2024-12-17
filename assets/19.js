hrft33n87d = "Discord is a registered trademark of Discord Inc. Shop Archives is not affiliated with, endorsed or sponsored by Discord Inc.";
n78ndg290n = "Greetings Shop Archives Staff and/or Dataminer! This model has everything only available for developers, only use this if you know what you're doing. Don't break anything :)";
mgx2tmg9tx = "Experiments";
mn7829t62d = "Test out new features";
y5n875tx29 = "Dev Options";
tcbx926n29 = "Stable 174";


if (localStorage.full_client_rework != "false") {

    api = 'https://raw.githubusercontent.com/Yappering/api/main/v2';
    prvapi = 'https://raw.githubusercontent.com/Yappering/private-api/refs/heads/main/v2';
    discordsupport = 'https://support.discord.com/hc/en-us/articles/';
    discordblog = 'https://discord.com/blog/';
    apidesignedurl = 'https://api.yapper.shop/v2';
    yapperblog = 'https://yapper.shop/blog/';
    cdn = 'https://cdn.yapper.shop/';

    if (localStorage.api_designed_url != "false") {
        api = apidesignedurl;
    }

    function privateAPICheck() {
        if (localStorage.force_all_api_to_fectch_private_api == "true") {
            api = prvapi;
        } else if (localStorage.api_designed_url != "false") {
            api = apidesignedurl;
        } else {
            api = 'https://raw.githubusercontent.com/Yappering/api/main/v2';
        }
    }


    COLLECTIBLES = '/collectibles-categories.json';
    COLLECTIBLES_IN_SHOP = '/collectibles-categories-published.json';
    CONSUMABLES = '/consumables.json';
    MISCELLANEOUS = '/miscellaneous-categories.json';
    PROFILES_PLUS = '/profiles-plus-categories.json';
    HOME_PAGE_PREVIEW = '/preview-1.json';
    HOME_PAGE_P_PLUS = '/preview-2.json';
    PROFILE_EFFECTS = '/user-profile-effects.json';
    DOWNLOADABLE_DATA = '/downloads.json';
    PROFILES_PLUS_EFFECTS = '/profiles-plus-profile-effects.json';
    LEAKS = '/leaked-categories.json';
    COLLECTIBLES_MARKETING = '/collectibles-marketing.json';
    COLLECTIBLES_VARIANTS = '/collectibles-categories-variants.json';
    EXPERIMENT_ROLLOUTS = '/rollout-handler.json';


    WINDOWKILL = "profiles-plus-1"
    BOPL_BATTLE = "profiles-plus-2"
    PAPER_BEACH = "profiles-plus-3"
    WINDOWKILL_V2 = "profiles-plus-4"
    FIVE_NIGHTS_AT_FREDDYS = "profiles-plus-5"
    PLUS_SPECIAL_EVENT = "profiles-plus-6"
    GEOMETRY_DASH = "profiles-plus-7"
    PAPER_BEACH_V2 = "profiles-plus-8"


    FANTASY = "1144003461608906824"
    ANIME = "1144302037593497701"
    BREAKFAST = "1144054000099012659"
    DISXCORE = "1144058340327047249"
    FALL = "1157406994873991284"
    HALLOWEEN = "1157410718711304313"
    WINTER = "1174459301239197856"
    MONSTERS = "1179493515038818325"
    CYBERPUNK = "1197342727608746044"
    LUNAR_NEW_YEAR = "1202069709281828935"
    ELEMENTS = "1207046915880124426"
    ANIME_V2 = "1212565175790473246"
    SPECIAL_EVENTS = "1217175518781243583"
    SPECIAL_EVENTS_2 = "1309309974266118144"
    SPRINGTOONS = "1217622942175727736"
    SHY = "1220513972189663413"
    LOFI_VIBES = "1228243842684162121"
    GALAXY = "1232029045928099922"
    FEELIN_RETRO = "1237649643073044491"
    PIRATES = "1237653589896200272"
    ARCADE = "1245086656973901894"
    TIDE = "1252404112650407998"
    DARK_FANTASY = "1256321669388308595"
    ROBERT = "1262491137386614805"
    STORM = "1265375293397270650"
    DOJO = "1266520267946201099"
    THE_VAULT = "1277733175191277721"
    AUTUMN_EQUINOX = "1282816432056569866"
    BAND = "1285465421339693076"
    SPOOKY_NIGHT = "1287835634089594972"
    CHANCE = "1293373563494993952"
    MYTHICAL_CREATURES = "1298033986811068497"
    WARRIOR = "1303490165284802580"
    KAWAII_MODE = "1306330663213072494"
    LOFI_GIRL = "1309668861943218229"
    WINTER_WONDERLAND = "1314020997204283476"


    HELP_AVATAR_DECORATIONS = "13410113109911"
    HELP_SHOP = "17162747936663"
    HELP_PROFILE_EFFECTS = "17828465914263"
    HELP_HD_STREAMING_POTION = "27343254089623"


    BLOG_AVATAR_DECORATIONS_PROFILE_EFFECTS = "avatar-decorations-collect-and-keep-the-newest-styles"


    YAPPER_BLOG_2024_RECAP = "2024-recap"


    DISMISSIBLE_2024_RECAP = "assets/103.svg"


    const params = new URLSearchParams(window.location.search);

    function setParams(params) {
        const url = new URL(window.location);
    
        // Clear all existing query parameters
        url.search = '';
    
        // Set the new query parameters from the provided object
        Object.entries(params).forEach(([key, value]) => {
            url.searchParams.set(key, value);
        });
    
        // Update the address bar without reloading the page
        history.replaceState(null, '', url);
    }

    function addParams(params) {
        const url = new URL(window.location);

        Object.entries(params).forEach(([key, value]) => {
            url.searchParams.set(key, value);
        });

        history.replaceState(null, '', url);
    }
    
    // Function to clear the shop data
    function clearShopData() {
        const output = document.querySelector("[data-shop-output]");
        output.innerHTML = ''; // Clears the content of the shop category
        if (params.get("page") === "consumables") {
            createPotionsCategoryLoadingElement()
        } else {
            createShopCategoryLoadingElement()
        }
    }
    
    // Function to fetch and display shop data
    function fetchData() {
        if (params.get("page") != "home" && params.get("page") != "recap_2024") {

            if (params.get("page") === "consumables") {
                createMainPotionsElement()
                createPotionsCategoryLoadingElement()
            } else {
                createMainShopElement()
                createShopCategoryLoadingElement()
            }
        
            // Clear the previous data
            clearShopData();
        
            // Fetch new data

            let profileEffectsCache = null; // Cache for the profile effects data

            // Make the function async
            fetch(apiUrl)
                .then(response => response.json())
                .then((data) => {
                    // Define async function inside the .then block
                    async function processCategories() {
                        const categoryTemplate = document.querySelector("[data-shop-category-template]");
                        const potionTemplate = document.querySelector("[data-potion-card-template]");
                        const categoryOutput = document.querySelector("[data-shop-output]");
                        const page = params.get("page");
            
                        for (const apiCategory of data) {
                            if (page === "pplus") {
                                // Existing code for 'pplus' page
                                const category = categoryTemplate.content.cloneNode(true).children[0];
                                category.querySelector("[data-shop-category-banner]").id = apiCategory.sku_id;
            
                                category.querySelector("[data-shop-category-banner-image]").src = `https://cdn.yapper.shop/assets/${apiCategory.banner}.png`;
                                category.querySelector("[data-shop-category-banner-image]").alt = apiCategory.name;
            
                                category.querySelector("[data-shop-category-logo-image]").src = `https://cdn.yapper.shop/assets/${apiCategory.logo}.png`;
                                category.querySelector("[data-shop-category-logo-image]").alt = apiCategory.name;
            
                                category.querySelector("[data-shop-category-desc]").id = `${apiCategory.sku_id}-summary`;
                                category.querySelector("[data-shop-category-desc]").textContent = apiCategory.summary;

                                category.querySelector("[data-shop-banner-banner-container]").id = `${apiCategory.sku_id}-banner-banner-container`;
                                category.querySelector("[data-shop-category-logo-holder]").id = `${apiCategory.sku_id}-logo-container`;
                                category.querySelector("[data-shop-discord-watermark-container]").id = `${apiCategory.sku_id}-discord-watermark-container`;

                                if (apiCategory.category_bg != null) {
                                    category.querySelector("[data-shop-category-marketing-bg]").src = `https://cdn.yapper.shop/assets/${apiCategory.category_bg}.png`;
                                }

                                const cardOutput = category.querySelector("[data-shop-category-card-holder]");
                                if (cardOutput) {
                                    for (const product of apiCategory.products) {
                                        const cardTemplate = document.querySelector("[data-shop-item-card-template]");
                                        const card = cardTemplate.content.cloneNode(true).children[0];

                                        if (product.type === 0) {
                                            product.items.forEach(item => {
                                                card.classList.add("type_0");
                                                // Set the innerHTML for the preview holder
                                                const previewHolder = card.querySelector("[data-shop-card-preview-holder]");
                                                previewHolder.classList.add('avatar-decoration-image');
                                                
                                                // Set the initial image for the deco card
                                                const imgElement = document.createElement("img");
                                                imgElement.id = "shop-card-deco-image";
                                                imgElement.src = `https://cdn.yapper.shop/custom-collectibles/${item.static}.png`;
                                                
                                                previewHolder.appendChild(imgElement);
                                        
                                                // Set the product details
                                                card.querySelector("[data-product-card-sku-id]").textContent = `Made By: ${product.credits}`;
                                                card.querySelector("[data-product-card-name]").textContent = product.name;
                                                card.querySelector("[data-product-card-summary]").textContent = product.summary;
                                        
                                                // Hover effect: Change the image src on mouse enter and leave
                                                if (localStorage.reduced_motion != "true") {
                                                    card.addEventListener("mouseenter", () => {
                                                        imgElement.src = `https://cdn.yapper.shop/custom-collectibles/${item.animated}.png`;
                                                    });
                                            
                                                    card.addEventListener("mouseleave", () => {
                                                        imgElement.src = `https://cdn.yapper.shop/custom-collectibles/${item.static}.png`;
                                                    });
                                                }
                                            });
                                        }
                                        

                                        if (product.type === 1) {
                                            card.classList.add("type_1");

                                            card.querySelector("[data-product-card-sku-id]").textContent = `Made By: ${product.credits}`;
                                            card.querySelector("[data-product-card-name]").textContent = product.name;
                                            card.querySelector("[data-product-card-summary]").textContent = product.summary;
                                            
                                            // Ensure the item ID is accessible here
                                            let itemId = undefined;
                                            if (Array.isArray(product.items)) {
                                                // If items is an array, find the item with type 1 and get its id
                                                const item = product.items.find(item => item.type === 1);
                                                if (item) {
                                                    itemId = item.id;
                                                }
                                            } else if (product.items && product.items.type === 1) {
                                                // If items is an object and has type 1, get its id
                                                itemId = product.items.id;
                                            }
                                        
                                        
                                            // Fetch profile effects API only if not already cached
                                            if (!profileEffectsCache) {
                                                const response = await fetch(api + PROFILES_PLUS_EFFECTS);
                                                const effectsData = await response.json();
                                                profileEffectsCache = effectsData.profile_effect_configs;
                                            }
                                        
                                            // Find matching profile effect
                                            const matchingEffect = profileEffectsCache.find(effect => effect.id === itemId);
                                        
                                            if (matchingEffect) {
                                                const previewHolder = card.querySelector("[data-shop-card-preview-holder]");
                                                previewHolder.classList.add('profile-effect-image');
                                        
                                                previewHolder.innerHTML = `
                                                    <img class="thumbnail-preview" src="${matchingEffect.thumbnailPreviewSrc}">
                                                `;
                                        
                                                // Hover effect: change to the first effect URL (use 'src' from the 'effects' array)
                                                const imgElement = card.querySelector("img");
                                        
                                                if (localStorage.reduced_motion != "true") {
                                                    card.addEventListener("mouseenter", () => {
                                                        if (matchingEffect.effects && matchingEffect.effects.length > 0) {
                                                            const effectUrl = matchingEffect.effects[0]?.src;
                                                            imgElement.src = effectUrl || matchingEffect.thumbnailPreviewSrc;
                                                        }
                                                    });
                                            
                                                    card.addEventListener("mouseleave", () => {
                                                        // Revert back to the original thumbnailPreviewSrc when hover ends
                                                        imgElement.src = matchingEffect.thumbnailPreviewSrc;
                                                    });
                                                } else {
                                                    card.addEventListener("mouseenter", () => {
                                                        imgElement.src = matchingEffect.reducedMotionSrc;
                                                    });
                                            
                                                    card.addEventListener("mouseleave", () => {
                                                        // Revert back to the original thumbnailPreviewSrc when hover ends
                                                        imgElement.src = matchingEffect.thumbnailPreviewSrc;
                                                    });
                                                }
                                            }
                                        }

                                        if (product.type === 1000) {
                                            card.classList.add("type_1000");
                                            // Fetch the bundled products for the bundle summary
                                            const bundledProducts = product.bundled_products || [];
                                        
                                            // Generate the bundle summary from the names of the bundled products
                                            const type0Product = bundledProducts.find(item => item.type === 0);
                                            const type1Product = bundledProducts.find(item => item.type === 1);
                                        
                                            let bundleSummary = "Bundle Includes: ";
                                            if (type0Product) {
                                                bundleSummary += `${type0Product.name} Decoration`;
                                            }
                                            if (type1Product) {
                                                bundleSummary += ` & ${type1Product.name} Profile Effect`;
                                            }
                                        
                                            // Set the summary text
                                            card.querySelector("[data-product-card-summary]").textContent = bundleSummary;
                                        
                                            // Set the basic card details
                                            card.querySelector("[data-product-card-sku-id]").textContent = `Made By: ${product.credits}`;
                                            card.querySelector("[data-product-card-name]").textContent = product.name;
                                        
                                            // Handle each item in the bundle
                                            product.items.forEach(item => {
                                                if (item.type === 0) {
                                                    // Avatar decoration
                                                    const decoImage = document.createElement("img");
                                                    decoImage.src = `https://cdn.yapper.shop/custom-collectibles/${item.static}.png`;
                                                    decoImage.alt = "Avatar Decoration";
                                                    decoImage.classList.add("avatar-decoration-image");
                                                    card.querySelector("[data-shop-card-preview-holder]").appendChild(decoImage);
                                        
                                                    // Hover effect for decoration image
                                                    if (localStorage.reduced_motion != "true") {
                                                        card.addEventListener("mouseenter", () => {
                                                            decoImage.src = `https://cdn.yapper.shop/custom-collectibles/${item.animated}.png`;
                                                        });
                                                        card.addEventListener("mouseleave", () => {
                                                            decoImage.src = `https://cdn.yapper.shop/custom-collectibles/${item.static}.png`;
                                                        });
                                                    }
                                                } else if (item.type === 1) {
                                                    // Profile effect
                                                    let profileEffectsCache = null; // Cache profile effects to avoid multiple fetches
                                        
                                                    (async () => {
                                                        if (!profileEffectsCache) {
                                                            const response = await fetch(api + PROFILES_PLUS_EFFECTS);
                                                            const effectsData = await response.json();
                                                            profileEffectsCache = effectsData.profile_effect_configs;
                                                        }
                                        
                                                        const matchingEffect = profileEffectsCache.find(effect => effect.id === item.id);
                                        
                                                        if (matchingEffect) {
                                                            const effectImage = document.createElement("img");
                                                            effectImage.src = matchingEffect.thumbnailPreviewSrc;
                                                            effectImage.alt = "Profile Effect";
                                                            effectImage.classList.add("profile-effect-image");
                                                            card.querySelector("[data-shop-card-preview-holder]").appendChild(effectImage);
                                        
                                                            // Hover effect for profile effect
                                                            if (localStorage.reduced_motion != "true") {
                                                                card.addEventListener("mouseenter", () => {
                                                                    if (matchingEffect.effects && matchingEffect.effects[0] && matchingEffect.effects[0].src) {
                                                                        effectImage.src = matchingEffect.effects[0].src;
                                                                    }
                                                                });
                                                                card.addEventListener("mouseleave", () => {
                                                                    effectImage.src = matchingEffect.thumbnailPreviewSrc;
                                                                });
                                                            } else {
                                                                card.addEventListener("mouseenter", () => {
                                                                    effectImage.src = matchingEffect.reducedMotionSrc;
                                                                });
                                                                card.addEventListener("mouseleave", () => {
                                                                    effectImage.src = matchingEffect.thumbnailPreviewSrc;
                                                                });
                                                            }
                                                        }
                                                    })();
                                                }
                                            });
                                        }

                                        if (product.type === 2000) {
                                            // Update SKU and summary
                                            card.querySelector("[data-product-card-sku-id]").textContent = `Made By: ${product.credits}`;
                                            card.querySelector("[data-product-card-summary]").textContent = product.summary;
                                        
                                            // Always display the base variant name
                                            card.querySelector("[data-product-card-name]").textContent = product.variants[0]?.base_variant_name || "Product";
                                        
                                            // Render variant color blocks as interactive divs
                                            const variantContainer = card.querySelector("[data-shop-card-var-container]");
                                            variantContainer.innerHTML = ""; // Clear existing variant blocks
                                            let currentSelectedVariant = null; // Track selected variant
                                        
                                            product.variants.forEach((variant, index) => {
                                                // Create variant color block
                                                const variantColorBlock = document.createElement("div");
                                                variantColorBlock.classList.add("shop-card-var");
                                                variantColorBlock.style.backgroundColor = `${variant.variant_value}`;
                                        
                                                // Add click event listener to switch variants
                                                variantColorBlock.addEventListener("click", () => {
                                                    if (currentSelectedVariant) {
                                                        currentSelectedVariant.classList.remove("shop-card-var-selected");
                                                    }
                                                    variantColorBlock.classList.add("shop-card-var-selected");
                                                    currentSelectedVariant = variantColorBlock;
                                                    applyVariant(variant);
                                                });
                                        
                                                // Append the color block to the container
                                                variantContainer.appendChild(variantColorBlock);
                                        
                                                // Set the first variant as the default selected
                                                if (index === 0) {
                                                    currentSelectedVariant = variantColorBlock;
                                                    variantColorBlock.classList.add("shop-card-var-selected");
                                                }
                                            });

                                            let isFirstTimeLoadingVariant = true;
                                            const previewHolder = card.querySelector("[data-shop-card-preview-holder]");
                                        
                                            // Function to apply the selected variant
                                            function applyVariant(selectedVariant) {
                                                card.querySelector("[data-shop-card-var-title]").textContent = `(${selectedVariant.variant_label})`;
                                                if (selectedVariant.type === 0) {
                                                    card.classList.add("type_2000-0");
                                                    previewHolder.innerHTML = ""; // Clear previous decorations
                                                    previewHolder.classList.add('avatar-decoration-image');
                                                    
                                                    // Add the avatar decoration based on the selected variant
                                                    selectedVariant.items?.forEach(item => {
                                                        const decoImage = document.createElement("img");
                                                        if (isFirstTimeLoadingVariant == true) {
                                                            decoImage.src = `https://cdn.yapper.shop/custom-collectibles/${item.static}.png`;
                                                            isFirstTimeLoadingVariant = false;
                                                        } else {
                                                            decoImage.src = `https://cdn.yapper.shop/custom-collectibles/${item.animated}.png`;
                                                        }
                                                        decoImage.alt = "Avatar Decoration";
                                                        decoImage.id = "shop-card-deco-image";
                                                        previewHolder.appendChild(decoImage);
                                                    
                                                        // Hover effect for decoration image
                                                        if (localStorage.reduced_motion !== "true") {
                                                            card.addEventListener("mouseenter", () => {
                                                                decoImage.src = `https://cdn.yapper.shop/custom-collectibles/${item.animated}.png`;
                                                            });
                                                            card.addEventListener("mouseleave", () => {
                                                                decoImage.src = `https://cdn.yapper.shop/custom-collectibles/${item.static}.png`;
                                                            });
                                                        }
                                                    });
                                                } else if (selectedVariant.type === 1) {
                                                    card.classList.add("type_2000-1");
                                                    (async () => {
                                                        // Ensure the item ID is accessible here
                                                        let itemId = undefined;
                                                        if (Array.isArray(selectedVariant.items)) {
                                                            // If items is an array, find the item with type 1 and get its id
                                                            const item = selectedVariant.items.find(item => item.type === 1);
                                                            if (item) {
                                                                itemId = item.id;
                                                            }
                                                        } else if (selectedVariant.items && selectedVariant.items.type === 1) {
                                                            // If items is an object and has type 1, get its id
                                                            itemId = selectedVariant.items.id;
                                                        }
                                                    
                                                    
                                                        // Fetch profile effects API only if not already cached
                                                        if (!profileEffectsCache) {
                                                            const response = await fetch(api + PROFILES_PLUS_EFFECTS);
                                                            const effectsData = await response.json();
                                                            profileEffectsCache = effectsData.profile_effect_configs;
                                                        }
                                                    
                                                        // Find matching profile effect
                                                        const matchingEffect = profileEffectsCache.find(effect => effect.id === itemId);
                                                    
                                                        if (matchingEffect) {
                                                            const previewHolder = card.querySelector("[data-shop-card-preview-holder]");
                                                            previewHolder.classList.add('profile-effect-image');
                                                        
                                                            if (isFirstTimeLoadingVariant == true) {
                                                                previewHolder.innerHTML = `
                                                                    <img class="thumbnail-preview" src="${matchingEffect.thumbnailPreviewSrc}">
                                                                `;
                                                                isFirstTimeLoadingVariant = false;
                                                            } else {
                                                                previewHolder.innerHTML = `
                                                                    <img class="thumbnail-preview" src="${matchingEffect.effects[0]?.src}">
                                                                `;
                                                            }
                                                        
                                                            // Hover effect: change to the first effect URL (use 'src' from the 'effects' array)
                                                            const imgElement = card.querySelector("img");
                                                        
                                                            if (localStorage.reduced_motion != "true") {
                                                                card.addEventListener("mouseenter", () => {
                                                                    if (matchingEffect.effects && matchingEffect.effects.length > 0) {
                                                                        const effectUrl = matchingEffect.effects[0]?.src;
                                                                        imgElement.src = effectUrl || matchingEffect.thumbnailPreviewSrc;
                                                                    }
                                                                });
                                                            
                                                                card.addEventListener("mouseleave", () => {
                                                                    // Revert back to the original thumbnailPreviewSrc when hover ends
                                                                    imgElement.src = matchingEffect.thumbnailPreviewSrc;
                                                                });
                                                            } else {
                                                                card.addEventListener("mouseenter", () => {
                                                                    imgElement.src = matchingEffect.reducedMotionSrc;
                                                                });
                                                            
                                                                card.addEventListener("mouseleave", () => {
                                                                    // Revert back to the original thumbnailPreviewSrc when hover ends
                                                                    imgElement.src = matchingEffect.thumbnailPreviewSrc;
                                                                });
                                                            }
                                                        }
                                                    })();
                                                }
                                            }
                                        
                                            // Apply the default variant (first one) initially
                                            if (product.variants.length > 0) {
                                                applyVariant(product.variants[0]);
                                            }
                                        }



                                        if (product.emojiCopy === null) {
                                            card.querySelector("[data-product-card-open-in-shop]").innerHTML = `
                                                <button class="card-button" onclick="location.href='https://discord.gg/Mcwh7hGcWb';" title="Request item in our Discord server">Request to P+</button>
                                            `;
                                        } else {
                                            card.querySelector("[data-product-card-open-in-shop]").innerHTML = `
                                                <button class="card-button" onclick="copyEmoji('${product.emojiCopy}');" title="Request item in our Discord server">Copy P+ Emoji</button>
                                            `;
                                        }

                                        if (product.premium_type === 2) {
                                            card.querySelector("[data-shop-card-tag-container]").innerHTML = `
                                                <div class="premiumWheelBadge_c23530 textBadge_df8943 base_df8943 eyebrow_df8943 baseShapeRound_df8943" aria-label="This bonus item is yours to keep and use anytime with an active Nitro subscription." style="background-color: var(--status-danger);"><svg class="premiumWheel_c23530" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" class=""></path><path fill="currentColor" fill-rule="evenodd" d="M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.25A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" clip-rule="evenodd" class=""></path><path fill="currentColor" d="M2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z" class=""></path></svg></div>
                                            `;
                                        }


                                        if (product.type === 'plus_more') {
                                            card.querySelector("[data-product-card-sku-id]").textContent = ``;
                                            card.querySelector("[data-product-card-name]").textContent = `Plus More...`;
                                            card.querySelector("[data-product-card-summary]").textContent = `There are more items in this category that are coming soon.`;

                                            card.querySelector("[data-shop-price-container]").innerHTML = ``;
                                            card.querySelector("[data-product-card-open-in-shop]").innerHTML = ``;
                                            card.querySelector("[data-share-product-card-button]").innerHTML = ``;

                                            const plusMoreQuestionMark = document.createElement("img");
                                            plusMoreQuestionMark.src = `https://cdn.discordapp.com/assets/server_products/storefront/question-mark.png`;
                                            plusMoreQuestionMark.classList.add("plus-more-question-mark");
                                            card.querySelector("[data-shop-card-preview-holder]").appendChild(plusMoreQuestionMark);
                                
                                            // Hover effect for decoration image
                                            if (localStorage.reduced_motion != "true") {
                                                card.addEventListener("mouseenter", () => {
                                                    plusMoreQuestionMark.src = `https://cdn.discordapp.com/assets/server_products/storefront/question-mark.gif`;
                                                });
                                                card.addEventListener("mouseleave", () => {
                                                    plusMoreQuestionMark.src = `https://cdn.discordapp.com/assets/server_products/storefront/question-mark.png`;
                                                });
                                            }
                                        }


                                        const unpublishedAt = new Date(product.unpublished_at);
                            
                                        if (product.unpublished_at && !isNaN(unpublishedAt.getTime())) {
                            
                                            function updateTimer() {
                                                const now = new Date();
                                                const timeDiff = unpublishedAt - now;
                            
                                                if (timeDiff <= 0) {
                                                    card.querySelector("[data-shop-card-tag-container]").innerHTML = `
                                                        <div class="unplublished-tag">
                                                            <p class="unplublished-tag-text">OFF SALE</p>
                                                        </div>
                                                    `;
                                                    clearInterval(timerInterval);
                                                } else {
                                                    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                                                    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                                    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / 1000);
                            
                                                    card.querySelector("[data-shop-card-tag-container]").innerHTML = `
                                                        <div class="unplublished-tag">
                                                            <p class="unplublished-tag-text">${days} DAYS LEFT TO REQUEST</p>
                                                        </div>
                                                    `;
                                                }
                                            }
                            
                                            const timerInterval = setInterval(updateTimer, 1000);
                                            updateTimer();
                                        }


                                        const ExpiredAt = new Date(product.expires_at);
                            
                                        if (product.expires_at && !isNaN(ExpiredAt.getTime())) {
                            
                                            function updateTimer() {
                                                const now = new Date();
                                                const timeDiff = ExpiredAt - now;
                            
                                                if (timeDiff <= 0) {
                                                    card.querySelector("[data-shop-card-tag-container]").innerHTML = `
                                                        <div class="unplublished-tag">
                                                            <p class="unplublished-tag-text">EXPIRED</p>
                                                        </div>
                                                    `;
                                                    clearInterval(timerInterval);
                                                } else {
                                                    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                                                    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                                    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / 1000);
                            
                                                    card.querySelector("[data-shop-card-tag-container]").innerHTML = `
                                                        <div class="unplublished-tag">
                                                            <p class="unplublished-tag-text">EXPIRES IN ${days}D ${hours}H</p>
                                                        </div>
                                                    `;
                                                }
                                            }
                            
                                            const timerInterval = setInterval(updateTimer, 1000);
                                            updateTimer();
                                        }

                                        const ReleasesAt = new Date(product.releases_at);
                            
                                        if (product.releases_at && !isNaN(ReleasesAt.getTime())) {
                            
                                            function updateTimer() {
                                                const now = new Date();
                                                const timeDiff = ReleasesAt - now;
                            
                                                if (timeDiff <= 0) {
                                                    card.querySelector("[data-shop-card-tag-container]").innerHTML = `
                                                        <div class="unplublished-tag">
                                                            <p class="unplublished-tag-text">PUBLISHING...</p>
                                                        </div>
                                                    `;
                                                    clearInterval(timerInterval);
                                                } else {
                                                    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                                                    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                                    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / 1000);
                            
                                                    card.querySelector("[data-shop-card-tag-container]").innerHTML = `
                                                        <div class="unplublished-tag">
                                                            <p class="unplublished-tag-text">${days}D ${hours}H</p>
                                                        </div>
                                                    `;
                                                }
                                            }
                            
                                            const timerInterval = setInterval(updateTimer, 1000);
                                            updateTimer();
                                        }

                                        // Append card to output
                                        card.classList.add('shop-category-card-transparent')
                                        cardOutput.append(card);
                                    }
                                }
            
                                categoryOutput.append(category);


                                const paper_beach2_banner = document.getElementById(PAPER_BEACH_V2);
                                const geometry_dash_banner = document.getElementById(GEOMETRY_DASH);
                                const special_event_plus_banner = document.getElementById(PLUS_SPECIAL_EVENT);
                                const fnaf_banner = document.getElementById(FIVE_NIGHTS_AT_FREDDYS);
                                const windowkill2_banner = document.getElementById(WINDOWKILL_V2);
                                const paper_beach_banner = document.getElementById(PAPER_BEACH);
                                const bopl_battle_banner = document.getElementById(BOPL_BATTLE);
                                const windowkill_banner = document.getElementById(WINDOWKILL);

                                if (localStorage.disable_client_banner_overrides != "true") {
                                    
                                    if (paper_beach2_banner) {
                                        document.getElementById(`${PAPER_BEACH_V2}-banner-banner-container`).innerHTML = `
                                            <img style="position: absolute; left: 0px; bottom: 0px; width: 1280px;" src="https://cdn.yapper.shop/assets/112.png">
                                            <img class="paper-beach-sun-banner-decoration" src="https://cdn.yapper.shop/assets/116.png">
                                        `;
                                        document.getElementById(`${PAPER_BEACH_V2}-logo-container`).innerHTML = `
                                                <img class="shop-category-banner-logo-1 shop-logo-sway" src="https://cdn.yapper.shop/assets/115.png" id="shop-banner-logo">
                                            `;
                                        document.getElementById(`${PAPER_BEACH_V2}-summary`).style.color = 'black';
                                    }
                                    
                                    if (windowkill2_banner) {
                                        document.getElementById(WINDOWKILL_V2).innerHTML = `
                                            <img class="shop-category-condensed-banner-img" src="https://cdn.yapper.shop/assets/86.png">
                                            <div class="shop-category-condensed-logo-holder" style="left: 23%;">
                                                <img class="shop-category-banner-logo" src="https://cdn.yapper.shop/assets/53.png" id="shop-banner-logo">
                                            </div>
                                        `;
                                    }
                                    
                                    if (paper_beach_banner) {
                                        document.getElementById(PAPER_BEACH).innerHTML = `
                                            <img class="shop-category-condensed-banner-img" src="https://cdn.yapper.shop/assets/3.png">
                                            <div class="shop-category-condensed-logo-holder" style="right: -6%;">
                                                <img class="shop-category-banner-logo" src="https://cdn.yapper.shop/assets/1.png" id="shop-banner-logo">
                                            </div>
                                        `;
                                    }
                                    
                                    if (bopl_battle_banner) {
                                        document.getElementById(BOPL_BATTLE).innerHTML = `
                                            <img class="shop-category-condensed-banner-img" src="https://cdn.yapper.shop/assets/92.png">
                                            <div class="shop-category-condensed-logo-holder" style="left: 15%;">
                                                <img class="shop-category-banner-logo" src="https://cdn.yapper.shop/assets/60.png" id="shop-banner-logo">
                                            </div>
                                        `;
                                    }
                                }


                                if (paper_beach2_banner) {
                                    try {
                                        document.getElementById(`${PAPER_BEACH_V2}-discord-watermark-container`).innerHTML = ``;
                                        document.getElementById(`${PAPER_BEACH_V2}-summary`).style.color = 'black';
                                    } catch (error) {}
                                }

                                if (geometry_dash_banner) {
                                    try {
                                        document.getElementById(`${GEOMETRY_DASH}-discord-watermark-container`).innerHTML = ``;
                                    } catch (error) {}
                                }

                                if (special_event_plus_banner) {
                                    try {
                                        document.getElementById(`${PLUS_SPECIAL_EVENT}-discord-watermark-container`).innerHTML = ``;
                                    } catch (error) {}
                                }

                                if (fnaf_banner) {
                                    try {
                                        document.getElementById(`${FIVE_NIGHTS_AT_FREDDYS}-discord-watermark-container`).innerHTML = ``;
                                    } catch (error) {}
                                }

                                if (windowkill2_banner) {
                                    try {
                                        document.getElementById(`${WINDOWKILL_V2}-discord-watermark-container`).innerHTML = ``;
                                        document.getElementById(`${WINDOWKILL_V2}-summary`).style.color = 'black';
                                    } catch (error) {}
                                }

                                if (paper_beach_banner) {
                                    try {
                                        document.getElementById(`${PAPER_BEACH}-discord-watermark-container`).innerHTML = ``;
                                        document.getElementById(`${PAPER_BEACH}-summary`).style.color = 'black';
                                    } catch (error) {}
                                }

                                if (bopl_battle_banner) {
                                    try {
                                        document.getElementById(`${BOPL_BATTLE}-discord-watermark-container`).innerHTML = ``;
                                        document.getElementById(`${BOPL_BATTLE}-logo-container`).innerHTML = ``;
                                        document.getElementById(`${BOPL_BATTLE}-summary`).style.color = 'black';
                                    } catch (error) {}
                                }

                                if (windowkill_banner) {
                                    try {
                                        document.getElementById(`${WINDOWKILL}-discord-watermark-container`).innerHTML = ``;
                                        document.getElementById(`${WINDOWKILL}-logo-container`).innerHTML = ``;
                                        document.getElementById(`${WINDOWKILL}-summary`).style.color = 'black';
                                    } catch (error) {}
                                }


                                

                            } else if (page === "consumables") {
                                // Existing code for 'consumables' page
                                const potionCard = potionTemplate.content.cloneNode(true).children[0];
                                potionCard.querySelector("[data-potion-card-holder]").id = apiCategory.sku_id;
            
                                potionCard.querySelector("[data-potion-card-preview-image]").src = `https://cdn.yapper.shop/discord-assets/${apiCategory.src}.png`;
                                potionCard.querySelector("[data-potion-card-preview-image]").alt = apiCategory.name;
            
                                potionCard.querySelector("[data-potion-card-desc]").textContent = apiCategory.summary;
                                potionCard.querySelector("[data-potion-card-title]").textContent = apiCategory.name;
                                potionCard.querySelector("[data-potion-card-price]").textContent = `US$${(apiCategory.price.amount / 100).toFixed(2)}`
                                potionCard.querySelector("[data-potion-card-sku]").textContent = 'SKU ID: ' + apiCategory.sku_id;
            
                                categoryOutput.append(potionCard);
                            } else {
                                // Default page handling
                                const category = categoryTemplate.content.cloneNode(true).children[0];
                                category.querySelector("[data-shop-category-banner]").id = apiCategory.sku_id;
            
                                category.querySelector("[data-shop-category-banner-image]").src = `https://cdn.discordapp.com/app-assets/1096190356233670716/${apiCategory.banner}.png?size=4096`;
                                category.querySelector("[data-shop-category-banner-image]").alt = apiCategory.name;
            
                                category.querySelector("[data-shop-category-logo-image]").src = `https://cdn.discordapp.com/app-assets/1096190356233670716/${apiCategory.logo}.png?size=4096`;
                                category.querySelector("[data-shop-category-logo-image]").alt = apiCategory.name;
            
                                category.querySelector("[data-shop-category-desc]").id = `${apiCategory.sku_id}-summary`;
                                category.querySelector("[data-shop-category-desc]").textContent = apiCategory.summary;

                                category.querySelector("[data-shop-banner-banner-container]").id = `${apiCategory.sku_id}-banner-banner-container`;
                                category.querySelector("[data-shop-category-logo-holder]").id = `${apiCategory.sku_id}-logo-container`;
                                category.querySelector("[data-shop-discord-watermark-container]").id = `${apiCategory.sku_id}-discord-watermark-container`;


                                const unpublishedAt = new Date(apiCategory.unpublished_at);
                            
                                if (apiCategory.unpublished_at && !isNaN(unpublishedAt.getTime())) {
                    
                                    function updateTimer() {
                                        const now = new Date();
                                        const timeDiff = unpublishedAt - now;
                    
                                        if (timeDiff <= 0) {
                                            category.querySelector("[data-shop-card-tag-container]").innerHTML = `
                                                <div class="unplublished-tag">
                                                    <p class="unplublished-tag-text">NOT IN STORE</p>
                                                </div>
                                            `;
                                            clearInterval(timerInterval);
                                        } else {
                                            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                                            const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                            const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / 1000);
                    
                                            category.querySelector("[data-shop-card-tag-container]").innerHTML = `
                                                <div class="unplublished-tag">
                                                    <p class="unplublished-tag-text">${days} DAYS LEFT TO REQUEST</p>
                                                </div>
                                            `;
                                        }
                                    }
                    
                                    const timerInterval = setInterval(updateTimer, 1000);
                                    updateTimer();
                                }
            
                                const cardOutput = category.querySelector("[data-shop-category-card-holder]");
                                if (cardOutput) {
                                    for (const product of apiCategory.products) {
                                        const cardTemplate = document.querySelector("[data-shop-item-card-template]");
                                        const card = cardTemplate.content.cloneNode(true).children[0];

                                        if (product.type === 0) {
                                            product.items.forEach(item => {
                                                
                                                card.classList.add("type_0");
                                                // Set the innerHTML for the preview holder
                                                const previewHolder = card.querySelector("[data-shop-card-preview-holder]");
                                                previewHolder.classList.add('avatar-decoration-image');
                                                
                                                // Set the initial image for the deco card
                                                const imgElement = document.createElement("img");
                                                imgElement.id = "shop-card-deco-image";
                                                imgElement.src = `https://cdn.discordapp.com/avatar-decoration-presets/${item.asset}.png?size=4096&passthrough=false`;
                                                
                                                previewHolder.appendChild(imgElement);
                                        
                                                // Set the product details
                                                card.querySelector("[data-product-card-sku-id]").textContent = `SKU ID: ${product.sku_id}`;
                                                card.querySelector("[data-product-card-name]").textContent = product.name;
                                                card.querySelector("[data-product-card-summary]").textContent = product.summary;
                                        
                                                // Hover effect: Change the image src on mouse enter and leave
                                                if (localStorage.reduced_motion != "true") {
                                                    card.addEventListener("mouseenter", () => {
                                                        imgElement.src = `https://cdn.discordapp.com/avatar-decoration-presets/${item.asset}.png?size=4096&passthrough=true`;
                                                    });
                                            
                                                    card.addEventListener("mouseleave", () => {
                                                        imgElement.src = `https://cdn.discordapp.com/avatar-decoration-presets/${item.asset}.png?size=4096&passthrough=false`;
                                                    });
                                                }
                                                
                                            });
                                        }

                                        if (product.type === 1) {
                                            card.classList.add("type_1");

                                            card.querySelector("[data-product-card-sku-id]").textContent = `SKU ID: ${product.sku_id}`;
                                            card.querySelector("[data-product-card-name]").textContent = product.name;
                                            card.querySelector("[data-product-card-summary]").textContent = product.summary;
                                            
                                            // Ensure the item ID is accessible here
                                            let itemId = undefined;
                                            if (Array.isArray(product.items)) {
                                                // If items is an array, find the item with type 1 and get its id
                                                const item = product.items.find(item => item.type === 1);
                                                if (item) {
                                                    itemId = item.id;
                                                }
                                            } else if (product.items && product.items.type === 1) {
                                                // If items is an object and has type 1, get its id
                                                itemId = product.items.id;
                                            }
                                        
                                        
                                            // Fetch profile effects API only if not already cached
                                            if (!profileEffectsCache) {
                                                const response = await fetch(api + PROFILE_EFFECTS);
                                                const effectsData = await response.json();
                                                profileEffectsCache = effectsData.profile_effect_configs;
                                            }
                                        
                                            // Find matching profile effect
                                            const matchingEffect = profileEffectsCache.find(effect => effect.id === itemId);
                                        
                                            if (matchingEffect) {
                                                const previewHolder = card.querySelector("[data-shop-card-preview-holder]");
                                                previewHolder.classList.add('profile-effect-image');
                                        
                                                previewHolder.innerHTML = `
                                                    <img class="thumbnail-preview" src="${matchingEffect.thumbnailPreviewSrc}">
                                                `;
                                        
                                                // Hover effect: change to the first effect URL (use 'src' from the 'effects' array)
                                                const imgElement = card.querySelector("img");
                                        
                                                if (localStorage.reduced_motion != "true") {
                                                    card.addEventListener("mouseenter", () => {
                                                        if (matchingEffect.effects && matchingEffect.effects.length > 0) {
                                                            const effectUrl = matchingEffect.effects[0]?.src;
                                                            imgElement.src = effectUrl || matchingEffect.thumbnailPreviewSrc;
                                                        }
                                                    });
                                            
                                                    card.addEventListener("mouseleave", () => {
                                                        // Revert back to the original thumbnailPreviewSrc when hover ends
                                                        imgElement.src = matchingEffect.thumbnailPreviewSrc;
                                                    });
                                                } else {
                                                    card.addEventListener("mouseenter", () => {
                                                        imgElement.src = matchingEffect.reducedMotionSrc;
                                                    });
                                            
                                                    card.addEventListener("mouseleave", () => {
                                                        // Revert back to the original thumbnailPreviewSrc when hover ends
                                                        imgElement.src = matchingEffect.thumbnailPreviewSrc;
                                                    });
                                                }
                                            }
                                        }

                                        if (product.type === 1000) {
                                            card.classList.add("type_1000");
                                            // Fetch the bundled products for the bundle summary
                                            const bundledProducts = product.bundled_products || [];
                                        
                                            // Generate the bundle summary from the names of the bundled products
                                            const type0Product = bundledProducts.find(item => item.type === 0);
                                            const type1Product = bundledProducts.find(item => item.type === 1);
                                        
                                            let bundleSummary = "Bundle Includes: ";
                                            if (type0Product) {
                                                bundleSummary += `${type0Product.name} Decoration`;
                                            }
                                            if (type1Product) {
                                                bundleSummary += ` & ${type1Product.name} Profile Effect`;
                                            }
                                        
                                            // Set the summary text
                                            card.querySelector("[data-product-card-summary]").textContent = bundleSummary;
                                        
                                            // Set the basic card details
                                            card.querySelector("[data-product-card-sku-id]").textContent = `SKU ID: ${product.sku_id}`;
                                            card.querySelector("[data-product-card-name]").textContent = product.name;
                                        
                                            // Handle each item in the bundle
                                            product.items.forEach(item => {
                                                if (item.type === 0) {
                                                    // Avatar decoration
                                                    const decoImage = document.createElement("img");
                                                    decoImage.src = `https://cdn.discordapp.com/avatar-decoration-presets/${item.asset}.png?size=4096&passthrough=false`;
                                                    decoImage.alt = "Avatar Decoration";
                                                    decoImage.classList.add("avatar-decoration-image");
                                                    card.querySelector("[data-shop-card-preview-holder]").appendChild(decoImage);
                                        
                                                    // Hover effect for decoration image
                                                    if (localStorage.reduced_motion != "true") {
                                                        card.addEventListener("mouseenter", () => {
                                                            decoImage.src = `https://cdn.discordapp.com/avatar-decoration-presets/${item.asset}.png?size=4096&passthrough=true`;
                                                        });
                                                        card.addEventListener("mouseleave", () => {
                                                            decoImage.src = `https://cdn.discordapp.com/avatar-decoration-presets/${item.asset}.png?size=4096&passthrough=false`;
                                                        });
                                                    }
                                                } else if (item.type === 1) {
                                                    // Profile effect
                                                    (async () => {
                                                        // Fetch profile effects if not cached
                                                        if (!profileEffectsCache) {
                                                            const response = await fetch(api + PROFILE_EFFECTS);
                                                            const effectsData = await response.json();
                                                            profileEffectsCache = effectsData.profile_effect_configs;
                                                        }
                                        
                                                        // Find the matching effect
                                                        const matchingEffect = profileEffectsCache.find(effect => effect.id === item.id);
                                        
                                                        if (matchingEffect) {
                                                            const effectImage = document.createElement("img");
                                                            effectImage.src = matchingEffect.thumbnailPreviewSrc;
                                                            effectImage.alt = "Profile Effect";
                                                            effectImage.classList.add("profile-effect-image");
                                                            card.querySelector("[data-shop-card-preview-holder]").appendChild(effectImage);
                                        
                                                            // Hover effect for profile effect
                                                            if (localStorage.reduced_motion != "true") {
                                                                card.addEventListener("mouseenter", () => {
                                                                    if (matchingEffect.effects && matchingEffect.effects[0] && matchingEffect.effects[0].src) {
                                                                        effectImage.src = matchingEffect.effects[0].src;
                                                                    }
                                                                });
                                                                card.addEventListener("mouseleave", () => {
                                                                    effectImage.src = matchingEffect.thumbnailPreviewSrc;
                                                                });
                                                            } else {
                                                                card.addEventListener("mouseenter", () => {
                                                                    effectImage.src = matchingEffect.reducedMotionSrc;
                                                                });
                                                                card.addEventListener("mouseleave", () => {
                                                                    effectImage.src = matchingEffect.thumbnailPreviewSrc;
                                                                });
                                                            }
                                                        }
                                                    })();
                                                }
                                            });
                                        }


                                        if (product.type === 2000) {
                                            // Update SKU and summary
                                            card.querySelector("[data-product-card-sku-id]").textContent = `SKU ID: ${product.sku_id}`;
                                            card.querySelector("[data-product-card-summary]").textContent = product.summary;
                                        
                                            // Always display the base variant name
                                            card.querySelector("[data-product-card-name]").textContent = product.variants[0]?.base_variant_name || "Product";
                                        
                                            // Render variant color blocks as interactive divs
                                            const variantContainer = card.querySelector("[data-shop-card-var-container]");
                                            variantContainer.innerHTML = ""; // Clear existing variant blocks
                                            let currentSelectedVariant = null; // Track selected variant
                                        
                                            product.variants.forEach((variant, index) => {
                                                // Create variant color block
                                                const variantColorBlock = document.createElement("div");
                                                variantColorBlock.classList.add("shop-card-var");
                                                variantColorBlock.style.backgroundColor = `${variant.variant_value}`;
                                        
                                                // Add click event listener to switch variants
                                                variantColorBlock.addEventListener("click", () => {
                                                    if (currentSelectedVariant) {
                                                        currentSelectedVariant.classList.remove("shop-card-var-selected");
                                                    }
                                                    variantColorBlock.classList.add("shop-card-var-selected");
                                                    currentSelectedVariant = variantColorBlock;
                                                    applyVariant(variant);
                                                });
                                        
                                                // Append the color block to the container
                                                variantContainer.appendChild(variantColorBlock);
                                        
                                                // Set the first variant as the default selected
                                                if (index === 0) {
                                                    currentSelectedVariant = variantColorBlock;
                                                    variantColorBlock.classList.add("shop-card-var-selected");
                                                }
                                            });

                                            let isFirstTimeLoadingVariant = true;
                                            const previewHolder = card.querySelector("[data-shop-card-preview-holder]");
                                        
                                            // Function to apply the selected variant
                                            function applyVariant(selectedVariant) {
                                                card.querySelector("[data-shop-card-var-title]").textContent = `(${selectedVariant.variant_label})`;
                                                if (selectedVariant.type === 0) {
                                                    card.classList.add("type_2000-0");
                                                    previewHolder.innerHTML = ""; // Clear previous decorations
                                                    previewHolder.classList.add('avatar-decoration-image');
                                                    
                                                    // Add the avatar decoration based on the selected variant
                                                    selectedVariant.items?.forEach(item => {
                                                        const decoImage = document.createElement("img");
                                                        if (isFirstTimeLoadingVariant == true) {
                                                            decoImage.src = `https://cdn.discordapp.com/avatar-decoration-presets/${item.asset}.png?size=4096&passthrough=false`;
                                                            isFirstTimeLoadingVariant = false;
                                                        } else {
                                                            decoImage.src = `https://cdn.discordapp.com/avatar-decoration-presets/${item.asset}.png?size=4096&passthrough=true`;
                                                        }
                                                        decoImage.alt = "Avatar Decoration";
                                                        decoImage.id = "shop-card-deco-image";
                                                        previewHolder.appendChild(decoImage);
                                                    
                                                        // Hover effect for decoration image
                                                        if (localStorage.reduced_motion !== "true") {
                                                            card.addEventListener("mouseenter", () => {
                                                                decoImage.src = `https://cdn.discordapp.com/avatar-decoration-presets/${item.asset}.png?size=4096&passthrough=true`;
                                                            });
                                                            card.addEventListener("mouseleave", () => {
                                                                decoImage.src = `https://cdn.discordapp.com/avatar-decoration-presets/${item.asset}.png?size=4096&passthrough=false`;
                                                            });
                                                        }
                                                    });
                                                } else if (selectedVariant.type === 1) {
                                                    card.classList.add("type_2000-1");
                                                    (async () => {
                                                        // Ensure the item ID is accessible here
                                                        let itemId = undefined;
                                                        if (Array.isArray(selectedVariant.items)) {
                                                            // If items is an array, find the item with type 1 and get its id
                                                            const item = selectedVariant.items.find(item => item.type === 1);
                                                            if (item) {
                                                                itemId = item.id;
                                                            }
                                                        } else if (selectedVariant.items && selectedVariant.items.type === 1) {
                                                            // If items is an object and has type 1, get its id
                                                            itemId = selectedVariant.items.id;
                                                        }
                                                    
                                                    
                                                        // Fetch profile effects API only if not already cached
                                                        if (!profileEffectsCache) {
                                                            const response = await fetch(api + PROFILE_EFFECTS);
                                                            const effectsData = await response.json();
                                                            profileEffectsCache = effectsData.profile_effect_configs;
                                                        }
                                                    
                                                        // Find matching profile effect
                                                        const matchingEffect = profileEffectsCache.find(effect => effect.id === itemId);
                                                    
                                                        if (matchingEffect) {
                                                            const previewHolder = card.querySelector("[data-shop-card-preview-holder]");
                                                            previewHolder.classList.add('profile-effect-image');
                                                        
                                                            if (isFirstTimeLoadingVariant == true) {
                                                                previewHolder.innerHTML = `
                                                                    <img class="thumbnail-preview" src="${matchingEffect.thumbnailPreviewSrc}">
                                                                `;
                                                                isFirstTimeLoadingVariant = false;
                                                            } else {
                                                                previewHolder.innerHTML = `
                                                                    <img class="thumbnail-preview" src="${matchingEffect.effects[0]?.src}">
                                                                `;
                                                            }
                                                        
                                                            // Hover effect: change to the first effect URL (use 'src' from the 'effects' array)
                                                            const imgElement = card.querySelector("img");
                                                        
                                                            if (localStorage.reduced_motion != "true") {
                                                                card.addEventListener("mouseenter", () => {
                                                                    if (matchingEffect.effects && matchingEffect.effects.length > 0) {
                                                                        const effectUrl = matchingEffect.effects[0]?.src;
                                                                        imgElement.src = effectUrl || matchingEffect.thumbnailPreviewSrc;
                                                                    }
                                                                });
                                                            
                                                                card.addEventListener("mouseleave", () => {
                                                                    // Revert back to the original thumbnailPreviewSrc when hover ends
                                                                    imgElement.src = matchingEffect.thumbnailPreviewSrc;
                                                                });
                                                            } else {
                                                                card.addEventListener("mouseenter", () => {
                                                                    imgElement.src = matchingEffect.reducedMotionSrc;
                                                                });
                                                            
                                                                card.addEventListener("mouseleave", () => {
                                                                    // Revert back to the original thumbnailPreviewSrc when hover ends
                                                                    imgElement.src = matchingEffect.thumbnailPreviewSrc;
                                                                });
                                                            }
                                                        }
                                                    })();
                                                }
                                            }
                                        
                                            // Apply the default variant (first one) initially
                                            if (product.variants.length > 0) {
                                                applyVariant(product.variants[0]);
                                            }
                                        }
                                        
                                        

                                        let priceStandard = "N/A";
                                        let priceNitro = "N/A";
                                
                                        if (product.prices && product.prices["0"] && product.prices["0"].country_prices && product.prices["0"].country_prices.prices[0]) {
                                            priceStandard = product.prices["0"].country_prices.prices[0].amount;
                                        }
                                
                                        if (product.prices && product.prices["4"] && product.prices["4"].country_prices && product.prices["4"].country_prices.prices[0]) {
                                            priceNitro = product.prices["4"].country_prices.prices[0].amount;
                                        }
                                
                                        // Add the prices to the card (adjust the element selectors as needed)
                                        const priceElementUSD = card.querySelector("[data-price-standard]");
                                        if (priceElementUSD) {
                                            priceElementUSD.textContent = priceStandard !== "N/A" ? `US$${(priceStandard / 100).toFixed(2)}` : "Price (USD): N/A";
                                        }
                                
                                        const priceElementOther = card.querySelector("[data-price-nitro]");
                                        if (priceElementOther) {
                                            priceElementOther.textContent = priceNitro !== "N/A" ? `US$${(priceNitro / 100).toFixed(2)} with Nitro` : "Price (Other): N/A";
                                        }

                                        card.querySelector("[data-product-card-open-in-shop]").innerHTML = `
                                            <button class="card-button" onclick="location.href='https://discord.com/shop#itemSkuId=${product.sku_id}';" title="Open this item in the Discord Shop">Open In Shop</button>
                                        `;

                                        if (product.premium_type === 2) {
                                            card.querySelector("[data-shop-card-tag-container]").innerHTML = `
                                                <div class="premiumWheelBadge_c23530 textBadge_df8943 base_df8943 eyebrow_df8943 baseShapeRound_df8943" aria-label="This bonus item is yours to keep and use anytime with an active Nitro subscription." style="background-color: var(--status-danger);"><svg class="premiumWheel_c23530" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" class=""></path><path fill="currentColor" fill-rule="evenodd" d="M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.25A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" clip-rule="evenodd" class=""></path><path fill="currentColor" d="M2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z" class=""></path></svg></div>
                                            `;
                                        }

                                        card.querySelector("[data-share-product-card-button]").innerHTML = `
                                            <svg class="shareIcon_f4a996" onclick="copyEmoji('https://canary.discord.com/shop#itemSkuId=${product.sku_id}');" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M16.32 14.72a1 1 0 0 1 0-1.41l2.51-2.51a3.98 3.98 0 0 0-5.62-5.63l-2.52 2.51a1 1 0 0 1-1.41-1.41l2.52-2.52a5.98 5.98 0 0 1 8.45 8.46l-2.52 2.51a1 1 0 0 1-1.41 0ZM7.68 9.29a1 1 0 0 1 0 1.41l-2.52 2.51a3.98 3.98 0 1 0 5.63 5.63l2.51-2.52a1 1 0 0 1 1.42 1.42l-2.52 2.51a5.98 5.98 0 0 1-8.45-8.45l2.51-2.51a1 1 0 0 1 1.42 0Z" class=""></path><path fill="currentColor" d="M14.7 10.7a1 1 0 0 0-1.4-1.4l-4 4a1 1 0 1 0 1.4 1.4l4-4Z" class=""></path></svg>
                                        `;


                                        if (product.type === 'plus_more') {
                                            card.querySelector("[data-product-card-sku-id]").textContent = ``;
                                            card.querySelector("[data-product-card-name]").textContent = `Plus More...`;
                                            card.querySelector("[data-product-card-summary]").textContent = `There are more items in this category that are coming soon.`;

                                            card.querySelector("[data-shop-price-container]").innerHTML = ``;
                                            card.querySelector("[data-product-card-open-in-shop]").innerHTML = ``;
                                            card.querySelector("[data-share-product-card-button]").innerHTML = ``;

                                            const plusMoreQuestionMark = document.createElement("img");
                                            plusMoreQuestionMark.src = `https://cdn.discordapp.com/assets/server_products/storefront/question-mark.png`;
                                            plusMoreQuestionMark.classList.add("plus-more-question-mark");
                                            card.querySelector("[data-shop-card-preview-holder]").appendChild(plusMoreQuestionMark);
                                
                                            // Hover effect for decoration image
                                            if (localStorage.reduced_motion != "true") {
                                                card.addEventListener("mouseenter", () => {
                                                    plusMoreQuestionMark.src = `https://cdn.discordapp.com/assets/server_products/storefront/question-mark.gif`;
                                                });
                                                card.addEventListener("mouseleave", () => {
                                                    plusMoreQuestionMark.src = `https://cdn.discordapp.com/assets/server_products/storefront/question-mark.png`;
                                                });
                                            }
                                        }

                                        const unpublishedAt = new Date(product.unpublished_at);
                            
                                        if (product.unpublished_at && !isNaN(unpublishedAt.getTime())) {
                            
                                            function updateTimer() {
                                                const now = new Date();
                                                const timeDiff = unpublishedAt - now;
                            
                                                if (timeDiff <= 0) {
                                                    card.querySelector("[data-shop-card-tag-container]").innerHTML = `
                                                        <div class="unplublished-tag">
                                                            <p class="unplublished-tag-text">OFF SALE</p>
                                                        </div>
                                                    `;
                                                    clearInterval(timerInterval);
                                                } else {
                                                    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                                                    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                                    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / 1000);
                            
                                                    card.querySelector("[data-shop-card-tag-container]").innerHTML = `
                                                        <div class="unplublished-tag">
                                                            <p class="unplublished-tag-text">${days} DAYS LEFT IN SHOP</p>
                                                        </div>
                                                    `;
                                                }
                                            }
                            
                                            const timerInterval = setInterval(updateTimer, 1000);
                                            updateTimer();
                                        }

                                        const ExpiredAt = new Date(product.expires_at);
                            
                                        if (product.expires_at && !isNaN(ExpiredAt.getTime())) {
                            
                                            function updateTimer() {
                                                const now = new Date();
                                                const timeDiff = ExpiredAt - now;
                            
                                                if (timeDiff <= 0) {
                                                    card.querySelector("[data-shop-card-tag-container]").innerHTML = `
                                                        <div class="unplublished-tag">
                                                            <p class="unplublished-tag-text">EXPIRED</p>
                                                        </div>
                                                    `;
                                                    clearInterval(timerInterval);
                                                } else {
                                                    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                                                    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                                                    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / 1000);
                            
                                                    card.querySelector("[data-shop-card-tag-container]").innerHTML = `
                                                        <div class="unplublished-tag">
                                                            <p class="unplublished-tag-text">EXPIRES IN ${days}D ${hours}H</p>
                                                        </div>
                                                    `;
                                                }
                                            }
                            
                                            const timerInterval = setInterval(updateTimer, 1000);
                                            updateTimer();
                                        }

                                        // Append card to output
                                        cardOutput.append(card);
                                    }
                                }
            
                                categoryOutput.append(category);

                                const winter_wonderland_banner = document.getElementById(WINTER_WONDERLAND);
                                const lofi_girl_banner = document.getElementById(LOFI_GIRL);
                                const kawaii_mode_banner = document.getElementById(KAWAII_MODE);
                                const arcane_banner = document.getElementById(WARRIOR);
                                const mythical_creatures_banner = document.getElementById(MYTHICAL_CREATURES);
                                const dnd_banner = document.getElementById(CHANCE);
                                const spooky_night_banner = document.getElementById(SPOOKY_NIGHT);
                                const street_fighter_banner = document.getElementById(BAND);
                                const autumn_equinox_banner = document.getElementById(AUTUMN_EQUINOX);
                                const fall_banner = document.getElementById(FALL);
                                const the_vault_banner = document.getElementById(THE_VAULT);
                                const dojo_banner = document.getElementById(DOJO);
                                const valorant_champions_banner = document.getElementById(STORM);
                                const sponge_bob_banner = document.getElementById(ROBERT);
                                const dark_fantasy_banner = document.getElementById(DARK_FANTASY);
                                const palworld_banner = document.getElementById(TIDE);
                                const valorant_banner = document.getElementById(SHY);
                                const springtoons_banner = document.getElementById(SPRINGTOONS);
                                const anime_v2_banner = document.getElementById(ANIME_V2);

                                if (localStorage.disable_client_banner_overrides != "true") {
                                    if (palworld_banner) {
                                        document.getElementById(`${TIDE}-discord-watermark-container`).innerHTML = ``;
                                        document.getElementById(`${TIDE}-banner-banner-container`).innerHTML = `
                                            <img style="position: absolute; left: 0px; bottom: 0px; width: 1280px;" src="https://cdn.yapper.shop/discord-assets/15.jpg">
                                            <img style="position: absolute; right: 0px; bottom: 0px; width: 400px;" src="https://cdn.yapper.shop/discord-assets/13.png">
                                            <img style="position: absolute; left: 0px; bottom: 0px; width: 400px;" src="https://cdn.yapper.shop/discord-assets/12.png">
                                        `;
                                        document.getElementById(`${TIDE}-logo-container`).innerHTML = `
                                            <img class="shop-category-banner-logo" src="https://cdn.yapper.shop/discord-assets/9.png" id="shop-banner-logo">
                                        `;
                                    }
                                    
                                    if (valorant_banner) {
                                        document.getElementById(`${SHY}-discord-watermark-container`).innerHTML = ``;
                                        document.getElementById(`${SHY}-banner-banner-container`).innerHTML = `
                                            <div class="shop-category-banner-img" style="background: rgb(255, 70, 85); position: absolute; left: 0px; bottom: 0px; width: 1280px;"></div>
                                            <img style="position: absolute; left: 0px; bottom: 0px; width: 1280px;" src="https://cdn.yapper.shop/discord-assets/23.png">
                                            <img style="position: absolute; left: 0px; bottom: 0px; width: 1280px;" src="https://cdn.yapper.shop/discord-assets/20.png">
                                            <img style="position: absolute; right: 0px; bottom: 0px; width: 1280px;" src="https://cdn.yapper.shop/discord-assets/22.png">
                                        `;
                                        document.getElementById(`${SHY}-logo-container`).innerHTML = `
                                            <img class="shop-category-banner-logo" src="https://cdn.yapper.shop/discord-assets/21.png" id="shop-banner-logo">
                                        `;
                                    }

                                    if (localStorage.reduced_motion != "true") {

                                        if (lofi_girl_banner) {
                                            document.getElementById(`${LOFI_GIRL}-banner-banner-container`).innerHTML = `
                                                <img class="shop-category-banner-img" style="position: absolute; left: 0px; bottom: 0px; width: 1280px;" src="https://cdn.discordapp.com/app-assets/1096190356233670716/1309668861964193803.png?size=4096">
                                                <video autoplay muted class="shop-category-banner-img" style="position: absolute; left: 0px; bottom: 0px; width: 1280px; z-index: 1;" src="https://cdn.discordapp.com/assets/collectibles/drops/lofi_girl/banner_animated.webm" loop></video>
                                            `;
                                        }

                                        if (kawaii_mode_banner) {
                                            document.getElementById(`${KAWAII_MODE}-banner-banner-container`).innerHTML = `
                                                <img class="shop-category-banner-img" style="position: absolute; left: 0px; bottom: 0px; width: 1280px;" src="https://cdn.discordapp.com/app-assets/1096190356233670716/1306330663229718579.png?size=4096">
                                                <video autoplay muted class="shop-category-banner-img" style="position: absolute; left: 0px; bottom: 0px; width: 1280px; z-index: 1;" src="https://cdn.discordapp.com/assets/collectibles/drops/kawaii_mode/banner_animated.webm" loop></video>
                                            `;
                                        }
    
                                        if (arcane_banner) {
                                            document.getElementById(`${WARRIOR}-banner-banner-container`).innerHTML = `
                                                <img class="shop-category-banner-img" style="position: absolute; left: 0px; bottom: 0px; width: 1280px;" src="https://cdn.discordapp.com/app-assets/1096190356233670716/1303490165297123358.png?size=4096">
                                                <img class="shop-category-banner-img" style="position: absolute; left: 0px; bottom: 0px; width: 1280px;" src="https://cdn.yapper.shop/discord-assets/35.png">
                                            `;
                                        }
                                        
                                        if (dnd_banner) {
                                            document.getElementById(`${CHANCE}-banner-banner-container`).innerHTML = `
                                                <img class="shop-category-banner-img" style="position: absolute; left: 0px; bottom: 0px; width: 1280px;" src="https://cdn.yapper.shop/discord-assets/32.png">
                                                <img class="shop-category-banner-img" style="position: absolute; left: 0px; bottom: 0px; width: 1280px;" src="https://cdn.yapper.shop/discord-assets/31.png">
                                            `;
                                        }
                                        
                                        if (street_fighter_banner) {
                                            document.getElementById(`${BAND}-banner-banner-container`).innerHTML = `
                                                <img class="shop-category-banner-img" style="position: absolute; left: 0px; bottom: 0px; width: 1280px;" src="https://cdn.discordapp.com/app-assets/1096190356233670716/1285465421356732426.png?size=4096">
                                                <img class="shop-category-banner-img" style="position: absolute; left: 0px; bottom: 0px; width: 1280px;" src="https://cdn.yapper.shop/discord-assets/19.png">
                                            `;
                                        }
    
                                        if (palworld_banner) {
                                            document.getElementById(`${TIDE}-discord-watermark-container`).innerHTML = ``;
                                            document.getElementById(`${TIDE}-banner-banner-container`).innerHTML = `
                                                <img style="position: absolute; left: 0px; bottom: 0px; width: 1280px;" src="https://cdn.yapper.shop/discord-assets/15.jpg">
                                                <img style="position: absolute; right: 0px; bottom: 0px; width: 1280px;" src="https://cdn.yapper.shop/discord-assets/14.png">
                                                <img style="position: absolute; right: 0px; bottom: 0px; width: 400px;" src="https://cdn.yapper.shop/discord-assets/13.png">
                                                <img style="position: absolute; left: 0px; bottom: 0px; width: 400px;" src="https://cdn.yapper.shop/discord-assets/12.png">
                                            `;
                                            document.getElementById(`${TIDE}-logo-container`).innerHTML = `
                                                <img class="shop-category-banner-logo" src="https://cdn.yapper.shop/discord-assets/9.png" id="shop-banner-logo">
                                            `;
                                        }
    
                                        if (valorant_banner) {
                                            document.getElementById(`${SHY}-discord-watermark-container`).innerHTML = ``;
                                            document.getElementById(`${SHY}-banner-banner-container`).innerHTML = `
                                                <div class="shop-category-banner-img" style="background: rgb(255, 70, 85); position: absolute; left: 0px; bottom: 0px; width: 1280px;"></div>
                                                <img style="position: absolute; left: 0px; bottom: 0px; width: 1280px;" src="https://cdn.yapper.shop/discord-assets/24.png">
                                                <img style="position: absolute; right: 0px; bottom: 0px; width: 1280px;" src="https://cdn.yapper.shop/discord-assets/22.png">
                                                <img style="position: absolute; left: 0px; bottom: 0px; width: 1280px;" src="https://cdn.yapper.shop/discord-assets/20.png">
                                            `;
                                            document.getElementById(`${SHY}-logo-container`).innerHTML = `
                                                <img class="shop-category-banner-logo" src="https://cdn.yapper.shop/discord-assets/21.png" id="shop-banner-logo">
                                            `;
                                        }
                                        
                                    }
                                }

                                if (winter_wonderland_banner) {
                                    document.getElementById(`${WINTER_WONDERLAND}-discord-watermark-container`).innerHTML = ``;
                                    document.getElementById(`${WINTER_WONDERLAND}-logo-container`).innerHTML = ``;
                                }

                                if (lofi_girl_banner) {
                                    document.getElementById(`${LOFI_GIRL}-discord-watermark-container`).innerHTML = ``;
                                    document.getElementById(`${LOFI_GIRL}-logo-container`).innerHTML = ``;
                                }

                                if (kawaii_mode_banner) {
                                    document.getElementById(`${KAWAII_MODE}-discord-watermark-container`).innerHTML = ``;
                                    document.getElementById(`${KAWAII_MODE}-logo-container`).innerHTML = ``;
                                    document.getElementById(`${KAWAII_MODE}-summary`).style.color = 'black';
                                }
                                
                                if (arcane_banner) {
                                    document.getElementById(`${WARRIOR}-discord-watermark-container`).innerHTML = ``;
                                    document.getElementById(`${WARRIOR}-logo-container`).innerHTML = ``;
                                }
                                
                                if (mythical_creatures_banner) {
                                    document.getElementById(`${MYTHICAL_CREATURES}-discord-watermark-container`).innerHTML = ``;
                                    document.getElementById(`${MYTHICAL_CREATURES}-logo-container`).innerHTML = ``;
                                }

                                if (dnd_banner) {
                                    document.getElementById(`${CHANCE}-discord-watermark-container`).innerHTML = ``;
                                    document.getElementById(`${CHANCE}-logo-container`).innerHTML = ``;
                                }

                                if (spooky_night_banner) {
                                    document.getElementById(`${SPOOKY_NIGHT}-discord-watermark-container`).innerHTML = ``;
                                    document.getElementById(`${SPOOKY_NIGHT}-logo-container`).innerHTML = ``;
                                }

                                if (street_fighter_banner) {
                                    document.getElementById(`${BAND}-discord-watermark-container`).innerHTML = ``;
                                    document.getElementById(`${BAND}-logo-container`).innerHTML = ``;
                                }

                                if (autumn_equinox_banner) {
                                    document.getElementById(`${AUTUMN_EQUINOX}-discord-watermark-container`).innerHTML = ``;
                                    document.getElementById(`${AUTUMN_EQUINOX}-logo-container`).innerHTML = ``;
                                }

                                if (fall_banner) {
                                    document.getElementById(`${FALL}-discord-watermark-container`).innerHTML = ``;
                                    document.getElementById(`${FALL}-logo-container`).innerHTML = ``;
                                }

                                if (the_vault_banner) {
                                    document.getElementById(`${THE_VAULT}-discord-watermark-container`).innerHTML = ``;
                                    document.getElementById(`${THE_VAULT}-logo-container`).innerHTML = ``;
                                }
                                
                                if (dojo_banner) {
                                    document.getElementById(`${DOJO}-discord-watermark-container`).innerHTML = ``;
                                    document.getElementById(`${DOJO}-logo-container`).innerHTML = ``;
                                    document.getElementById(`${DOJO}-summary`).style.color = 'black';
                                }

                                if (valorant_champions_banner) {
                                    document.getElementById(`${STORM}-discord-watermark-container`).innerHTML = ``;
                                    document.getElementById(`${STORM}-logo-container`).innerHTML = ``;
                                }

                                if (sponge_bob_banner) {
                                    document.getElementById(`${ROBERT}-discord-watermark-container`).innerHTML = ``;
                                    document.getElementById(`${ROBERT}-logo-container`).innerHTML = ``;
                                    document.getElementById(`${ROBERT}-summary`).style.color = 'black';
                                }

                                if (dark_fantasy_banner) {
                                    document.getElementById(`${DARK_FANTASY}-logo-container`).innerHTML = ``;
                                }
                                
                                if (springtoons_banner) {
                                    document.getElementById(`${SPRINGTOONS}-summary`).style.color = 'black';
                                }

                                if (anime_v2_banner) {
                                    document.getElementById(`${ANIME_V2}-summary`).style.color = 'black';
                                }
                            }
                        }
            
                        // Remove loading container
                        document.getElementById("shop-category-loading-container").innerHTML = ``;
                    }
            
                    // Call the async function
                    processCategories();
                })
                .catch(error => {
                    console.error('Error fetching the API:', error);
                    document.getElementById("everything-housing-container").innerHTML = `
                        <div style="text-align: center; margin-top: 10px;" id="failed-to-load-shop">
                            <img style="width: 200px;" src="https://raw.githubusercontent.com/DTACat/Collectibles/main/Images/shopuhoh.png">
                            <h2>Well, this is awkward.</h2>
                            <p>Hmmm, we weren&#8217;t able to load the shop. Check back later.</p>
                            <p>${error}</p>
                            <button class="refresh-button" onclick="location.reload();">Reload</button>
                        </div>
                    `;
                });

        } else if (params.get("page") === "home") {
                
            if (localStorage.unreleased_discord_collectibles == "true") {
                const client_token = localStorage.getItem('token');
                apiUrlRaw = prvapi + HOME_PAGE_PREVIEW;
                apiUrl = `${apiUrlRaw}?token=${client_token}`;  
            } else {
                apiUrl = api + HOME_PAGE_PREVIEW;
            }

            let profileEffectsCache = null;
            
            fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                data.forEach(apiCategory => {
                    async function processCategories() {
                        const template = document.querySelector("[data-shop-category-template]");
                        const output = document.querySelector("[data-shop-output]");
                
                        const category = template.content.cloneNode(true).children[0];
                
                        category.querySelector("[data-shop-category-banner-image]").src = `https://cdn.discordapp.com/app-assets/1096190356233670716/${apiCategory.hero_banner}.png?size=4096`;
                        category.querySelector("[data-shop-category-banner-image]").alt = apiCategory.name;
    
                        if (apiCategory.hero_logo == null) {
                            category.querySelector("[data-shop-category-logo-image]").src = `https://cdn.discordapp.com/app-assets/1096190356233670716/${apiCategory.logo}.png?size=4096`;
                        } else {
                            category.querySelector("[data-shop-category-logo-image]").src = `https://cdn.discordapp.com/app-assets/1096190356233670716/${apiCategory.hero_logo}.png?size=4096`;
                        }
                        category.querySelector("[data-shop-category-logo-image]").alt = apiCategory.name;

                        category.querySelector("[data-shop-category-desc]").id = `${apiCategory.sku_id}-summary`;
                        category.querySelector("[data-shop-category-desc]").textContent = apiCategory.summary;

                        category.querySelector("[data-preview-banner-container]").id = apiCategory.sku_id;
                        category.querySelector("[data-shop-banner-banner-container]").id = `${apiCategory.sku_id}-preview-banner-container`;
                
                        category.querySelector("[data-preview-new-categoey-button]").innerHTML = `
                            <button class="home-page-preview-button" onclick="setParams({page: 'shop'}); location.reload();">Shop the ${apiCategory.name} Collection</button>
                        `;
    
                        const cardOutput = category.querySelector("[data-shop-category-card-holder]");
                        if (cardOutput) {
                            for (const product of apiCategory.products) {
                                const cardTemplate = document.querySelector("[data-shop-item-card-template]");
                                const card = cardTemplate.content.cloneNode(true).children[0];

                                product.items.forEach(item => {
                                    if (product.type === 0) {
                                        card.classList.add("type_0");
                                        // Set the innerHTML for the preview holder
                                        const previewHolder = card.querySelector("[data-shop-card-preview-holder]");
                                        previewHolder.classList.add('avatar-decoration-image');
                                        
                                        // Set the initial image for the deco card
                                        const imgElement = document.createElement("img");
                                        imgElement.id = "shop-card-deco-image";
                                        imgElement.src = `https://cdn.discordapp.com/avatar-decoration-presets/${item.asset}.png?size=4096&passthrough=false`;
                                        
                                        previewHolder.appendChild(imgElement);
                                
                                        // Set the product details
                                        card.querySelector("[data-product-card-sku-id]").textContent = `SKU ID: ${product.sku_id}`;
                                        card.querySelector("[data-product-card-name]").textContent = product.name;
                                        card.querySelector("[data-product-card-summary]").textContent = product.summary;
                                
                                        // Hover effect: Change the image src on mouse enter and leave
                                        if (localStorage.reduced_motion != "true") {
                                            card.addEventListener("mouseenter", () => {
                                                imgElement.src = `https://cdn.discordapp.com/avatar-decoration-presets/${item.asset}.png?size=4096&passthrough=true`;
                                            });
                                    
                                            card.addEventListener("mouseleave", () => {
                                                imgElement.src = `https://cdn.discordapp.com/avatar-decoration-presets/${item.asset}.png?size=4096&passthrough=false`;
                                            });
                                        }
                                    }
                                });

                                if (product.type === 1) {
                                    card.classList.add("type_1");

                                    card.querySelector("[data-product-card-sku-id]").textContent = `SKU ID: ${product.sku_id}`;
                                    card.querySelector("[data-product-card-name]").textContent = product.name;
                                    card.querySelector("[data-product-card-summary]").textContent = product.summary;
                                    
                                    // Ensure the item ID is accessible here
                                    let itemId = undefined;
                                    if (Array.isArray(product.items)) {
                                        // If items is an array, find the item with type 1 and get its id
                                        const item = product.items.find(item => item.type === 1);
                                        if (item) {
                                            itemId = item.id;
                                        }
                                    } else if (product.items && product.items.type === 1) {
                                        // If items is an object and has type 1, get its id
                                        itemId = product.items.id;
                                    }
                                
                                
                                    // Fetch profile effects API only if not already cached
                                    if (!profileEffectsCache) {
                                        const response = await fetch(api + PROFILE_EFFECTS);
                                        const effectsData = await response.json();
                                        profileEffectsCache = effectsData.profile_effect_configs;
                                    }
                                
                                    // Find matching profile effect
                                    const matchingEffect = profileEffectsCache.find(effect => effect.id === itemId);
                                
                                    if (matchingEffect) {
                                        const previewHolder = card.querySelector("[data-shop-card-preview-holder]");
                                        previewHolder.classList.add('profile-effect-image');
                                
                                        previewHolder.innerHTML = `
                                            <img class="thumbnail-preview" src="${matchingEffect.thumbnailPreviewSrc}">
                                        `;
                                
                                        // Hover effect: change to the first effect URL (use 'src' from the 'effects' array)
                                        const imgElement = card.querySelector("img");
                                
                                        if (localStorage.reduced_motion != "true") {
                                            card.addEventListener("mouseenter", () => {
                                                if (matchingEffect.effects && matchingEffect.effects.length > 0) {
                                                    const effectUrl = matchingEffect.effects[0]?.src;
                                                    imgElement.src = effectUrl || matchingEffect.thumbnailPreviewSrc;
                                                }
                                            });
                                    
                                            card.addEventListener("mouseleave", () => {
                                                // Revert back to the original thumbnailPreviewSrc when hover ends
                                                imgElement.src = matchingEffect.thumbnailPreviewSrc;
                                            });
                                        } else {
                                            card.addEventListener("mouseenter", () => {
                                                imgElement.src = matchingEffect.reducedMotionSrc;
                                            });
                                    
                                            card.addEventListener("mouseleave", () => {
                                                // Revert back to the original thumbnailPreviewSrc when hover ends
                                                imgElement.src = matchingEffect.thumbnailPreviewSrc;
                                            });
                                        }
                                    }
                                }

                                if (product.type === 1000) {
                                    card.classList.add("type_1000");
                                    // Fetch the bundled products for the bundle summary
                                    const bundledProducts = product.bundled_products || [];
                                
                                    // Generate the bundle summary from the names of the bundled products
                                    const type0Product = bundledProducts.find(item => item.type === 0);
                                    const type1Product = bundledProducts.find(item => item.type === 1);
                                
                                    let bundleSummary = "Bundle Includes: ";
                                    if (type0Product) {
                                        bundleSummary += `${type0Product.name} Decoration`;
                                    }
                                    if (type1Product) {
                                        bundleSummary += ` & ${type1Product.name} Profile Effect`;
                                    }
                                
                                    // Set the summary text
                                    card.querySelector("[data-product-card-summary]").textContent = bundleSummary;
                                
                                    // Set the basic card details
                                    card.querySelector("[data-product-card-sku-id]").textContent = `SKU ID: ${product.sku_id}`;
                                    card.querySelector("[data-product-card-name]").textContent = product.name;
                                
                                    // Handle each item in the bundle
                                    product.items.forEach(item => {
                                        if (item.type === 0) {
                                            // Avatar decoration
                                            const decoImage = document.createElement("img");
                                            decoImage.src = `https://cdn.discordapp.com/avatar-decoration-presets/${item.asset}.png?size=4096&passthrough=false`;
                                            decoImage.alt = "Avatar Decoration";
                                            decoImage.classList.add("avatar-decoration-image");
                                            card.querySelector("[data-shop-card-preview-holder]").appendChild(decoImage);
                                
                                            // Hover effect for decoration image
                                            if (localStorage.reduced_motion != "true") {
                                                card.addEventListener("mouseenter", () => {
                                                    decoImage.src = `https://cdn.discordapp.com/avatar-decoration-presets/${item.asset}.png?size=4096&passthrough=true`;
                                                });
                                                card.addEventListener("mouseleave", () => {
                                                    decoImage.src = `https://cdn.discordapp.com/avatar-decoration-presets/${item.asset}.png?size=4096&passthrough=false`;
                                                });
                                            }
                                        } else if (item.type === 1) {
                                            // Profile effect
                                            (async () => {
                                                // Fetch profile effects if not cached
                                                if (!profileEffectsCache) {
                                                    const response = await fetch(api + PROFILE_EFFECTS);
                                                    const effectsData = await response.json();
                                                    profileEffectsCache = effectsData.profile_effect_configs;
                                                }
                                
                                                // Find the matching effect
                                                const matchingEffect = profileEffectsCache.find(effect => effect.id === item.id);
                                
                                                if (matchingEffect) {
                                                    const effectImage = document.createElement("img");
                                                    effectImage.src = matchingEffect.thumbnailPreviewSrc;
                                                    effectImage.alt = "Profile Effect";
                                                    effectImage.classList.add("profile-effect-image");
                                                    card.querySelector("[data-shop-card-preview-holder]").appendChild(effectImage);
                                
                                                    // Hover effect for profile effect
                                                    if (localStorage.reduced_motion != "true") {
                                                        card.addEventListener("mouseenter", () => {
                                                            if (matchingEffect.effects && matchingEffect.effects[0] && matchingEffect.effects[0].src) {
                                                                effectImage.src = matchingEffect.effects[0].src;
                                                            }
                                                        });
                                                        card.addEventListener("mouseleave", () => {
                                                            effectImage.src = matchingEffect.thumbnailPreviewSrc;
                                                        });
                                                    } else {
                                                        card.addEventListener("mouseenter", () => {
                                                            effectImage.src = matchingEffect.reducedMotionSrc;
                                                        });
                                                        card.addEventListener("mouseleave", () => {
                                                            effectImage.src = matchingEffect.thumbnailPreviewSrc;
                                                        });
                                                    }
                                                }
                                            })();
                                        }
                                    });
                                }
                                
                                

                                if (product.type === 2000) {
                                    // Update SKU and summary
                                    card.querySelector("[data-product-card-sku-id]").textContent = `SKU ID: ${product.sku_id}`;
                                    card.querySelector("[data-product-card-summary]").textContent = product.summary;
                                
                                    // Always display the base variant name
                                    card.querySelector("[data-product-card-name]").textContent = product.variants[0]?.base_variant_name || "Product";
                                
                                    // Render variant color blocks as interactive divs
                                    const variantContainer = card.querySelector("[data-shop-card-var-container]");
                                    variantContainer.innerHTML = ""; // Clear existing variant blocks
                                    let currentSelectedVariant = null; // Track selected variant
                                
                                    product.variants.forEach((variant, index) => {
                                        // Create variant color block
                                        const variantColorBlock = document.createElement("div");
                                        variantColorBlock.classList.add("shop-card-var");
                                        variantColorBlock.style.backgroundColor = `${variant.variant_value}`;
                                
                                        // Add click event listener to switch variants
                                        variantColorBlock.addEventListener("click", () => {
                                            if (currentSelectedVariant) {
                                                currentSelectedVariant.classList.remove("shop-card-var-selected");
                                            }
                                            variantColorBlock.classList.add("shop-card-var-selected");
                                            currentSelectedVariant = variantColorBlock;
                                            applyVariant(variant);
                                        });
                                
                                        // Append the color block to the container
                                        variantContainer.appendChild(variantColorBlock);
                                
                                        // Set the first variant as the default selected
                                        if (index === 0) {
                                            currentSelectedVariant = variantColorBlock;
                                            variantColorBlock.classList.add("shop-card-var-selected");
                                        }
                                    });

                                    let isFirstTimeLoadingVariant = true;
                                    const previewHolder = card.querySelector("[data-shop-card-preview-holder]");
                                
                                    // Function to apply the selected variant
                                    function applyVariant(selectedVariant) {
                                        card.querySelector("[data-shop-card-var-title]").textContent = `(${selectedVariant.variant_label})`;
                                        if (selectedVariant.type === 0) {
                                            card.classList.add("type_2000-0");
                                            previewHolder.innerHTML = ""; // Clear previous decorations
                                            previewHolder.classList.add('avatar-decoration-image');
                                            
                                            // Add the avatar decoration based on the selected variant
                                            selectedVariant.items?.forEach(item => {
                                                const decoImage = document.createElement("img");
                                                if (isFirstTimeLoadingVariant == true) {
                                                    decoImage.src = `https://cdn.discordapp.com/avatar-decoration-presets/${item.asset}.png?size=4096&passthrough=false`;
                                                    isFirstTimeLoadingVariant = false;
                                                } else {
                                                    decoImage.src = `https://cdn.discordapp.com/avatar-decoration-presets/${item.asset}.png?size=4096&passthrough=true`;
                                                }
                                                decoImage.alt = "Avatar Decoration";
                                                decoImage.id = "shop-card-deco-image";
                                                previewHolder.appendChild(decoImage);
                                            
                                                // Hover effect for decoration image
                                                if (localStorage.reduced_motion !== "true") {
                                                    card.addEventListener("mouseenter", () => {
                                                        decoImage.src = `https://cdn.discordapp.com/avatar-decoration-presets/${item.asset}.png?size=4096&passthrough=true`;
                                                    });
                                                    card.addEventListener("mouseleave", () => {
                                                        decoImage.src = `https://cdn.discordapp.com/avatar-decoration-presets/${item.asset}.png?size=4096&passthrough=false`;
                                                    });
                                                }
                                            });
                                        } else if (selectedVariant.type === 1) {
                                            card.classList.add("type_2000-1");
                                            (async () => {
                                                // Ensure the item ID is accessible here
                                                let itemId = undefined;
                                                if (Array.isArray(selectedVariant.items)) {
                                                    // If items is an array, find the item with type 1 and get its id
                                                    const item = selectedVariant.items.find(item => item.type === 1);
                                                    if (item) {
                                                        itemId = item.id;
                                                    }
                                                } else if (selectedVariant.items && selectedVariant.items.type === 1) {
                                                    // If items is an object and has type 1, get its id
                                                    itemId = selectedVariant.items.id;
                                                }
                                            
                                            
                                                // Fetch profile effects API only if not already cached
                                                if (!profileEffectsCache) {
                                                    const response = await fetch(api + PROFILE_EFFECTS);
                                                    const effectsData = await response.json();
                                                    profileEffectsCache = effectsData.profile_effect_configs;
                                                }
                                            
                                                // Find matching profile effect
                                                const matchingEffect = profileEffectsCache.find(effect => effect.id === itemId);
                                            
                                                if (matchingEffect) {
                                                    const previewHolder = card.querySelector("[data-shop-card-preview-holder]");
                                                    previewHolder.classList.add('profile-effect-image');
                                                
                                                    if (isFirstTimeLoadingVariant == true) {
                                                        previewHolder.innerHTML = `
                                                            <img class="thumbnail-preview" src="${matchingEffect.thumbnailPreviewSrc}">
                                                        `;
                                                        isFirstTimeLoadingVariant = false;
                                                    } else {
                                                        previewHolder.innerHTML = `
                                                            <img class="thumbnail-preview" src="${matchingEffect.effects[0]?.src}">
                                                        `;
                                                    }
                                                
                                                    // Hover effect: change to the first effect URL (use 'src' from the 'effects' array)
                                                    const imgElement = card.querySelector("img");
                                                
                                                    if (localStorage.reduced_motion != "true") {
                                                        card.addEventListener("mouseenter", () => {
                                                            if (matchingEffect.effects && matchingEffect.effects.length > 0) {
                                                                const effectUrl = matchingEffect.effects[0]?.src;
                                                                imgElement.src = effectUrl || matchingEffect.thumbnailPreviewSrc;
                                                            }
                                                        });
                                                    
                                                        card.addEventListener("mouseleave", () => {
                                                            // Revert back to the original thumbnailPreviewSrc when hover ends
                                                            imgElement.src = matchingEffect.thumbnailPreviewSrc;
                                                        });
                                                    } else {
                                                        card.addEventListener("mouseenter", () => {
                                                            imgElement.src = matchingEffect.reducedMotionSrc;
                                                        });
                                                    
                                                        card.addEventListener("mouseleave", () => {
                                                            // Revert back to the original thumbnailPreviewSrc when hover ends
                                                            imgElement.src = matchingEffect.thumbnailPreviewSrc;
                                                        });
                                                    }
                                                }
                                            })();
                                        }
                                    }
                                
                                    // Apply the default variant (first one) initially
                                    if (product.variants.length > 0) {
                                        applyVariant(product.variants[0]);
                                    }
                                }

                                let priceStandard = "N/A";
                                let priceNitro = "N/A";
                        
                                if (product.prices && product.prices["0"] && product.prices["0"].country_prices && product.prices["0"].country_prices.prices[0]) {
                                    priceStandard = product.prices["0"].country_prices.prices[0].amount;
                                }
                        
                                if (product.prices && product.prices["4"] && product.prices["4"].country_prices && product.prices["4"].country_prices.prices[0]) {
                                    priceNitro = product.prices["4"].country_prices.prices[0].amount;
                                }
                        
                                // Add the prices to the card (adjust the element selectors as needed)
                                const priceElementUSD = card.querySelector("[data-price-standard]");
                                if (priceElementUSD) {
                                    priceElementUSD.textContent = priceStandard !== "N/A" ? `US$${(priceStandard / 100).toFixed(2)}` : "Price (USD): N/A";
                                }
                        
                                const priceElementOther = card.querySelector("[data-price-nitro]");
                                if (priceElementOther) {
                                    priceElementOther.textContent = priceNitro !== "N/A" ? `US$${(priceNitro / 100).toFixed(2)} with Nitro` : "Price (Other): N/A";
                                }

                                card.querySelector("[data-product-card-open-in-shop]").innerHTML = `
                                    <button class="card-button" onclick="location.href='https://discord.com/shop#itemSkuId=${product.sku_id}';" title="Open this item in the Discord Shop">Open In Shop</button>
                                `;

                                if (product.premium_type === 2) {
                                    card.querySelector("[data-shop-card-tag-container]").innerHTML = `
                                        <div class="premiumWheelBadge_c23530 textBadge_df8943 base_df8943 eyebrow_df8943 baseShapeRound_df8943" aria-label="This bonus item is yours to keep and use anytime with an active Nitro subscription." style="background-color: var(--status-danger);"><svg class="premiumWheel_c23530" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" class=""></path><path fill="currentColor" fill-rule="evenodd" d="M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.25A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" clip-rule="evenodd" class=""></path><path fill="currentColor" d="M2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z" class=""></path></svg></div>
                                    `;
                                }

                                card.querySelector("[data-share-product-card-button]").innerHTML = `
                                    <svg class="shareIcon_f4a996" onclick="copyEmoji('https://canary.discord.com/shop#itemSkuId=${product.sku_id}');" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M16.32 14.72a1 1 0 0 1 0-1.41l2.51-2.51a3.98 3.98 0 0 0-5.62-5.63l-2.52 2.51a1 1 0 0 1-1.41-1.41l2.52-2.52a5.98 5.98 0 0 1 8.45 8.46l-2.52 2.51a1 1 0 0 1-1.41 0ZM7.68 9.29a1 1 0 0 1 0 1.41l-2.52 2.51a3.98 3.98 0 1 0 5.63 5.63l2.51-2.52a1 1 0 0 1 1.42 1.42l-2.52 2.51a5.98 5.98 0 0 1-8.45-8.45l2.51-2.51a1 1 0 0 1 1.42 0Z" class=""></path><path fill="currentColor" d="M14.7 10.7a1 1 0 0 0-1.4-1.4l-4 4a1 1 0 1 0 1.4 1.4l4-4Z" class=""></path></svg>
                                `;

                                // Append card to output
                                cardOutput.append(card);
                            }
                        }
                        output.append(category);

                        document.getElementById("shop-category-loading-container").innerHTML = ``;

                        const lofi_girl_banner = document.getElementById(LOFI_GIRL);
                        const kawaii_mode_banner = document.getElementById(KAWAII_MODE);

                        if (localStorage.reduced_motion != "true") {

                            if (lofi_girl_banner) {  // Check if element exists
                                document.getElementById(`${LOFI_GIRL}-preview-banner-container`).innerHTML = `
                                    <video autoplay muted class="home-page-preview-banner" src="https://cdn.discordapp.com/assets/collectibles/drops/lofi_girl/hero_banner.webm" loop></video>
                                `;
                            }

                            if (kawaii_mode_banner) {  // Check if element exists
                                document.getElementById('1306330663213072494-preview-banner-container').innerHTML = `
                                    <video autoplay muted class="home-page-preview-banner" src="https://cdn.discordapp.com/assets/collectibles/drops/kawaii_mode/hero_banner.webm" loop></video>
                                `;
                            }
                        }
                        if (kawaii_mode_banner) {  // Check if element exists
                            document.getElementById('1306330663213072494-summary').style.color = 'black';
                        }
                    }
                    
                    processCategories()
                });
            })
            .catch(error => {
                console.error('Error fetching the API:', error);
            });
            
            
            apiUrlplus = api + HOME_PAGE_P_PLUS;
            
            fetch(apiUrlplus)
            .then(response => response.json())
            .then(data => {
                data.forEach(user => {
                    const template = document.querySelector("[data-shop-category-template-plus]");
                    const output = document.querySelector("[data-shop-output-plus]");
            
                    const category = template.content.cloneNode(true).children[0];
            
                    const oneImage = category.querySelector("[data-shop-preview-image-plus]");
                    oneImage.src = `https://cdn.yapper.shop/assets/${user.src}.png`;
                    oneImage.alt = user.name;

                    output.append(category);
                });
            
            })
            .catch(error => {
                console.error('Error fetching the API:', error);
            });
        } else if (params.get("page") === "recap_2024") {
            createRecap2024Element()
        }
    }
    
    // Function to copy the emoji to clipboard
    function copyEmoji(emoji) {
        navigator.clipboard.writeText(emoji)
    }
    
    // Redirect to Google if emojiCopy is null
    function redirectToGoogle() {
        window.location.href = 'https://discord.gg/Mcwh7hGcWb';
    }
    

    if (params.get("page") != "item_tool" && params.get("page") != "published_listings") {
        window.onload = fetchData;
    }

    const clickable_side_tabs_container = document.getElementById('clickable-side-tabs-container');
    if (clickable_side_tabs_container) {  // Check if element exists
        document.getElementById('clickable-side-tabs-container').innerHTML = `
        <p class="center-text" style="font-size: 12px; display: flex;">${hrft33n87d}</p>
        <div id="home-section">
            <button class="dm-button" id="home-tab" onclick="setParams({page: 'home'}); location.reload();">
                <p class="dm-button-text">Home</p>
            </button>
            <div id="recap-2024-tab-loading">
            </div>
        </div>
        <div class="dm-divider">Collectibles</div>
        <div id="collectibles-section">
            <button class="dm-button" id="shop-tab" onclick="setParams({page: 'shop'}); location.reload();">
                <p class="dm-button-text">Shop</p>
            </button>
            <div id="leaks-tab-loading">
            </div>
            <button class="dm-button" id="potions-tab" onclick="setParams({page: 'consumables'}); location.reload();">
                <p class="dm-button-text">Potions</p>
            </button>
            <button class="dm-button" id="miscellaneous-tab" onclick="setParams({page: 'miscellaneous'}); location.reload();">
                <p class="dm-button-text">Miscellaneous</p>
            </button>
            <button class="dm-button" id="pplus-tab" onclick="setParams({page: 'pplus'}); location.reload();">
                <p class="dm-button-text">Profiles Plus</p>
            </button>
        </div>
        <div class="dm-divider">Tools</div>
        <div id="tools">
            <button class="dm-button" id="avatar-decorations-debug-tab" onclick="setParams({page: 'item_tool'}); location.reload();">
                <p class="dm-button-text">Item Debug</p>
            </button>
            <button class="dm-button" id="published-listings-tab" onclick="setParams({page: 'published_listings'}); location.reload();">
                <p class="dm-button-text">Published Listings</p>
            </button>
        </div>
        `;
    }

    if (localStorage.recap_items_2024 === "true" || localStorage.recap_items_2024 === "true_autorollout") {
        document.getElementById('recap-2024-tab-loading').innerHTML = `
            <img class="recap-2024-tab-decoration" src="https://cdn.yapper.shop/assets/104.png">
            <button class="dm-button" id="recap-2024-tab" onclick="setParams({page: 'recap_2024'}); location.reload();">
                <p class="dm-button-text">2024 Recap</p>
            </button>

        `;
        document.getElementById('recap-2024-tab').style.backgroundImage = "linear-gradient(90deg, rgba(200, 91, 241, 0.00) 18.75%, #C85BF1 108.26%)";
    }

    function pageCheck() {
        privateAPICheck()
        if (params.get("page") === "home") {
            document.title = "Home | Shop Archives";
            createHomePageElement()
            document.getElementById("home-tab").classList.add('dm-button-selected');
        } else if (params.get("page") === "recap_2024") {
            document.title = "2024 Recap | Shop Archives";
            document.getElementById("recap-2024-tab").classList.add('dm-button-selected');
            localStorage.dismissible_recap_2024 = "dismissed";
            document.getElementById("top-bar-container").innerHTML = `
                <h2 style="margin-left: 260px; margin-top: 10px;">2024 Recap</h2>
                <div id="open-help-modals-buttons-holder"></div>
            `;
        } else if (params.get("page") === "shop") {
            document.title = "Shop | Shop Archives";
            if (localStorage.items_in_shop_yes == "true") {
                apiUrl = api + COLLECTIBLES_IN_SHOP;
            } else if (localStorage.unreleased_discord_collectibles == "true") {
                const client_token = localStorage.getItem('token');
                apiUrlRaw = prvapi + COLLECTIBLES;
                apiUrl = `${apiUrlRaw}?token=${client_token}`;  
            } else if (localStorage.fetch_collectibles_variants !== "true") {
                apiUrl = api + COLLECTIBLES_VARIANTS;
            } else {
                apiUrl = api + COLLECTIBLES;
            }
            createMainShopElement()
            document.getElementById("shop-tab").classList.add('dm-button-selected');
            document.getElementById("top-bar-container").innerHTML = `
                <h2 style="margin-left: 260px; margin-top: 10px;">Discord Shop</h2>
                <div id="open-help-modals-buttons-holder"></div>
            `;
        } else if (params.get("page") === "leaks") {
            document.title = "Leaks | Shop Archives";
            apiUrl = api + LEAKS;
            createMainShopElement()
            document.getElementById("top-bar-container").innerHTML = `
                <h2 style="margin-left: 260px; margin-top: 10px;">Leaks</h2>
                <div id="open-help-modals-buttons-holder"></div>
            `;
        } else if (params.get("page") === "consumables") {
            document.title = "Potions | Shop Archives";
            apiUrl = api + CONSUMABLES;
            createMainPotionsElement()
            document.getElementById("potions-tab").classList.add('dm-button-selected');
            document.getElementById("top-bar-container").innerHTML = `
                <h2 style="margin-left: 260px; margin-top: 10px;">Discord Potions</h2>
                <div id="open-help-modals-buttons-holder"></div>
            `;
        } else if (params.get("page") === "miscellaneous") {
            document.title = "Miscellaneous | Shop Archives";
            apiUrl = api + MISCELLANEOUS;
            createMainShopElement()
            document.getElementById("miscellaneous-tab").classList.add('dm-button-selected');
            document.getElementById("top-bar-container").innerHTML = `
                <h2 style="margin-left: 260px; margin-top: 10px;">Miscellaneous</h2>
                <div id="open-help-modals-buttons-holder"></div>
            `;
        } else if (params.get("page") === "pplus") {
            document.title = "Profiles Plus | Shop Archives";
            if (localStorage.unreleased_profiles_plus == "true") {
                const client_token = localStorage.getItem('token');
                apiUrlRaw = prvapi + PROFILES_PLUS;
                apiUrl = `${apiUrlRaw}?token=${client_token}`;  
            } else {
                apiUrl = api + PROFILES_PLUS;
            }
            if (localStorage.profiles_plus_marketing_variants == "variant_1" || localStorage.profiles_plus_marketing_variants == "variant_1_autorollout") {
                localStorage.dismissible_paper_beach_v2_marketing = "dismissed";
            }
            createMainShopElement()
            document.getElementById("pplus-tab").classList.add('dm-button-selected');
            document.getElementById("top-bar-container").innerHTML = `
                <h2 style="margin-left: 260px; margin-top: 10px;">Profiles Plus</h2>
                <div id="open-help-modals-buttons-holder"></div>
            `;
        } else if (params.get("page") === "item_tool") {
            document.title = "Item Tool | Shop Archives";
            createItemToolPageElement()
            document.getElementById("avatar-decorations-debug-tab").classList.add('dm-button-selected');
            document.getElementById("top-bar-container").innerHTML = `
                <h2 style="margin-left: 260px; margin-top: 10px;">Item Tool</h2>
                <div id="open-help-modals-buttons-holder"></div>
            `;
        } else if (params.get("page") === "published_listings") {
            document.title = "Published Listings | Shop Archives";
            createPublishedListingsPageElement()
            document.getElementById("published-listings-tab").classList.add('dm-button-selected');
            document.getElementById("top-bar-container").innerHTML = `
                <h2 style="margin-left: 260px; margin-top: 10px;">Published Listings</h2>
                <div id="open-help-modals-buttons-holder"></div>
            `;
        } else {
            setParams({page: 'home',err: '404'});
            document.title = "Home | Shop Archives";
            location.reload();
        }

        const open_help_modals_buttons_holder = document.getElementById('open-help-modals-buttons-holder');
        open_help_modals_buttons_holder.innerHTML = `
            <svg title="Dev Tools" x="0" y="0" onclick="openDevModal()" style="display: none;" id="open-dev-tools-button-1" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M2 20.59V19.4a1 1 0 0 1 .3-.7l2.4-2.42a1 1 0 0 1 .71-.29H6l9-9-.85-.85a1 1 0 0 1-.23-.34l-1.49-3.73a.5.5 0 0 1 .65-.65l3.73 1.5a1 1 0 0 1 .34.22l.64.64a1 1 0 0 1 1.42 0l1 1a1 1 0 0 1 0 1.42l1.58 1.58a1 1 0 0 1 0 1.42l-1.58 1.58a1 1 0 0 1-1.42 0L17 9l-9 9v.59a1 1 0 0 1-.3.7l-2.4 2.42a1 1 0 0 1-.71.29H3.4a1 1 0 0 1-.7-.3l-.42-.4a1 1 0 0 1-.29-.71Z" class=""></path><path fill="currentColor" d="M8.23 10.23c.2.2.51.2.7 0l1.3-1.3a.5.5 0 0 0 0-.7L6.5 4.5l.3-.3a1 1 0 0 0 0-1.4l-.5-.5c-.2-.2-.45-.3-.7-.22-.43.14-1.17.49-2.1 1.42a5.37 5.37 0 0 0-1.42 2.1c-.08.25.03.5.21.7l.5.5a1 1 0 0 0 1.42 0l.29-.3 3.73 3.73ZM13.77 15.06a.5.5 0 0 0 0 .7l1.73 1.74 1.44 2.4a1 1 0 0 0 .15.19l1.73 1.73c.1.1.26.1.36 0l2.64-2.64c.1-.1.1-.26 0-.36L20.1 17.1a1 1 0 0 0-.2-.15L17.5 15.5l-1.73-1.73a.5.5 0 0 0-.7 0l-1.3 1.3Z" class=""></path></svg>
            <svg title="Options" x="0" y="0" onclick="optionsSidebarToggle()" id="open-options-tools-button-1" aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16.4483 8.3333H18.3333V11.6667H16.4492C16.2483 12.4425 15.9167 13.165 15.4708 13.8033L16.6667 15 15 16.6667 13.8042 15.47C13.1642 15.9158 12.4433 16.2483 11.6667 16.4483V18.3333H8.3333V16.4483C7.5575 16.2483 6.8358 15.9158 6.1967 15.47L5 16.6667 3.3333 15 4.53 13.8033C4.0842 13.1658 3.7517 12.4433 3.5517 11.6667H1.6667V8.3333H3.5517C3.7517 7.5567 4.0833 6.835 4.53 6.1967L3.3333 5 5 3.3333 6.1967 4.53C6.835 4.0833 7.5567 3.7517 8.3333 3.5517V1.6667H11.6667V3.5508C12.4433 3.7517 13.1642 4.0833 13.8042 4.5292L15 3.3325 16.6667 4.9992 15.47 6.1967C15.9158 6.835 16.2483 7.5575 16.4483 8.3333ZM10 13.3333C11.8409 13.3333 13.3333 11.8409 13.3333 10 13.3333 8.159 11.8409 6.6667 10 6.6667 8.159 6.6667 6.6667 8.159 6.6667 10 6.6667 11.8409 8.159 13.3333 10 13.3333Z")></path></svg>
        `;
        if (localStorage.dev == "true") {
            const dev_tool_button = document.querySelector("#open-dev-tools-button-1");
            dev_tool_button.style.display = 'block';
        }
    }

    pageCheck();


    
    function leaksCheck() {
        if (localStorage.override_leaks_button === "true") {
            console.log(`Valid Leaks Check: Overridden`);
            document.getElementById('leaks-tab-loading').innerHTML = `
                <button class="dm-button" id="leaks-tab" onclick="setParams({page: 'leaks'}); location.reload();" title="New {apiCategory.name} Leaks">
                    <p class="dm-button-text">Leaks</p>
                    <div class="dm-new-icon">
                        NEW
                    </div>
                </button>
            `;
            if (params.get("page") === "leaks") {
                document.getElementById("leaks-tab").classList.add('dm-button-selected');
            }
        } else {
            fetch(api + LEAKS)
            .then(response => response.json())
            .then((data) => {
                data.forEach(apiCategory => {
                    console.log(`Valid Leaks Check: True`);
                    document.getElementById('leaks-tab-loading').innerHTML = `
                        <button class="dm-button" id="leaks-tab" onclick="setParams({page: 'leaks'}); location.reload();" title="New ${apiCategory.name} Leaks">
                            <p class="dm-button-text">Leaks</p>
                            <div class="dm-new-icon">
                                NEW
                            </div>
                        </button>
                    `;
                    if (params.get("page") === "leaks") {
                        document.getElementById("leaks-tab").classList.add('dm-button-selected');
                    }
                });
            })
            .catch(error => {
                console.log(`Valid Leaks Check: False`);
                document.getElementById('leaks-tab-loading').innerHTML = ``;
            });
        }
    }



    leaksCheck();



    function createHomePageElement() {
        document.getElementById("everything-housing-container").innerHTML = `
            <div id="home-page-warning-container">
            </div>
            <div id="home-page-dismissible-content-container">
            </div>
            <template data-shop-category-template>
                <div>
                    <div data-preview-banner-container>
                        <div id="home-page-preview-banner-container" data-shop-banner-banner-container>
                            <img class="home-page-preview-banner" src="" data-shop-category-banner-image>
                        </div>
                        <div style="margin-top: -250px; margin-bottom: 50px; position: relative; z-index: 1;">
                            <div id="home-page-preview-logo-container">
                                <img src="" style="height: 130px;" data-shop-category-logo-image>
                                <div id="home-page-preview-desc-container" data-shop-category-desc-container>
                                    <p style="font-size: 18px; margin-left: 20px; margin-top: -10px;" data-shop-category-desc></p>
                                </div>
                            </div>
                            <div id="home-page-preview-button-container" data-preview-new-categoey-button>
                            </div>
                        </div>
                        <!-- Timer Display -->
                        <div class="shop-expiry-timer" style="display: none;">
                            <p class="shop-expiry-timer-timer" id="shop-expiry-timer"></p>
                        </div>
                    </div>
                    <div style="max-height: 440px; overflow: hidden;" class="shop-category-card-holder" id="shop-category-card-holder" data-shop-category-card-holder>
                    </div>
                </div>
            </template>
            <template data-shop-item-card-template>
                <div class="shop-category-card">
                    <div data-shop-card-preview-holder>
                    </div>
                    <div class="card-bottom">
                        <div title="Copy Link" data-share-product-card-button></div>
                        <a class="item-credits" data-product-card-sku-id>Failed To Load Item</a>
                        <h3 data-product-card-name>Failed To Load Item</h3>
                        <p class="shop-card-summary" data-product-card-summary>Failed To Load Item</p>
                        <div class="shop-price-container" data-shop-price-container>
                            <a style="font-size: large; font-weight: 900;" data-price-standard></a>
                            <a data-price-nitro></a>
                        </div>
                        <div class="shop-card-var-container" data-shop-card-var-container>
                        </div>
                        <a class="shop-card-var-title" data-shop-card-var-title></a>
                    </div>
                    <div class="card-button-container"data-product-card-open-in-shop>
                        <button class="card-button" title="Open this item in the Discord Shop">Open In Shop</button>
                    </div>
                    <div class="shop-card-tag-container" data-shop-card-tag-container>
                    </div>
                </div>
            </template>
            <div data-shop-output>
            </div>
            <div style="margin-top: 50px;" id="shop-category-loading-container">
                <div class="shop-category-loading" id="shop-category-loading">
                    <div>
                        <div class="shop-category-banner-loading">
                        </div>
                        <div class="shop-category-card-holder-loading">
                            <div class="shop-category-card-loading">
                            </div>
                            <div class="shop-category-card-loading">
                            </div>
                            <div class="shop-category-card-loading">
                            </div>
                            <div class="shop-category-card-loading">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <h2 style="margin-left: 60px;">What's new for Profiles Plus</h2>
            <div style="display: flex; width: 1300px; margin-left: auto; margin-right: auto;" data-shop-output-plus>
                <template data-shop-category-template-plus>
                    <div onclick="setParams({page: 'pplus'}); location.reload();" style="width: 550px; margin-left: auto; margin-right: auto; cursor: pointer;">
                        <img style="width: 550px;" src="" data-shop-preview-image-plus>
                    </div>
                </template>
            </div>

            <div id="recap-support-articles">
            </div>
        `;
        if (params.get("err") === "404") {
            document.getElementById("home-page-warning-container").innerHTML = `
                <div class="shop-warning home-page-temporary-warning">
                    <p class="shop-notice-text">Error: 404 Not Found</p>
                </div>
            `;
        }
        if (params.get("err") === "403") {
            document.getElementById("home-page-warning-container").innerHTML = `
                <div class="shop-warning home-page-temporary-warning">
                    <p class="shop-notice-text">Error: 403 Forbidden</p>
                </div>
            `;
        }
        if (localStorage.recap_items_2024 === "true" || localStorage.recap_items_2024 === "true_autorollout") {
            if (localStorage.dismissible_recap_2024 != "dismissed") {
                document.getElementById("home-page-dismissible-content-container").innerHTML = `
                    <img class="home-page-dismissible-content-2024-recap" onclick="dismissibleContentRecap2024()" src="${cdn}${DISMISSIBLE_2024_RECAP}" title="Check out everything 2024 had to offer!">
                `;
            }
        }
    }

    function dismissibleContentRecap2024() {
        setParams({page: 'recap_2024'}); location.reload();
        localStorage.dismissible_recap_2024 = "dismissed";
    }

    function createRecap2024Element() {
        document.getElementById("everything-housing-container").innerHTML = `
            <div class="thy-shop-category-idk" style="height: auto;">
                <img class="shop-category-marketing-bg" style="height: 100%; position: absolute; filter: blur(3px);" src="${cdn}assets/110.svg">

                <div style="height: 60px; padding-top: 30px;">
                </div>
                
                <div class="a2024-recap-text-card-1">
                    <h1 class="center-text abcgintonord" style="font-size: 44px; margin-top: 0px; margin-bottom: 0px;">2024 Recap</h1>

                    <p class="center-text" style="font-size: 18px;">Things such as Splash Potions and randomness added to Profile Effects and much more were all nice gifts given to us in 2024!</p>
                    <p class="center-text" style="font-size: 18px;">The Shop Archives teams has made this article that covers everything that was added to Discord in 2024!</p>
                </div>

                <hr style="opacity: 0; height: 30px;">

                <div class="a2024-recap-text-card-1">
                    <h1 class="center-text abcgintonord" style="font-size: 44px; margin-top: 0px; margin-bottom: 0px;">Winter Nitro Promotion</h1>

                    <img class="a2024-recap-img-1" src="${cdn}assets/117.gif">

                    <p class="center-text" style="font-size: 18px;">This Christmas, up until January 6th, 2025, when you purchase a Nitro gift you can choose 1 of 3 Avatar Decorations of your own to collect and keep!</p>
                </div>

                <hr style="opacity: 0; height: 30px;">

                <div class="a2024-recap-text-card-1">
                    <h1 class="center-text abcgintonord" style="font-size: 44px; margin-top: 0px; margin-bottom: 0px;">HD Splash Potions</h1>

                    <img class="a2024-recap-img-1" src="${cdn}assets/109.png">

                    <p class="center-text" style="font-size: 18px;">HD Splash Potion allows everyone in a voice channel to enjoy HD video streaming quality for the next 12 hours for only US$0.99.</p>
                </div>

                <hr style="opacity: 0; height: 30px;">

                <div class="a2024-recap-text-card-1">
                    <h1 class="center-text abcgintonord" style="font-size: 44px; margin-top: 0px; margin-bottom: 0px;">Halloween Nitro Promotion</h1>

                    <img class="a2024-recap-img-1" src="${cdn}assets/108.png">

                    <p class="center-text" style="font-size: 18px;">From October 7th to November 4th, if you buy a Discord Nitro gift, you'll receive the 'Minios' Avatar Decoration of your own to collect and keep!</p>
                </div>

                <hr style="opacity: 0; height: 30px;">

                <div class="a2024-recap-text-card-1">
                    <h1 class="center-text abcgintonord" style="font-size: 44px; margin-top: 0px; margin-bottom: 0px;">Random Profile Effect Outcomes</h1>

                    <img class="a2024-recap-img-1" src="${cdn}assets/106.png">

                    <p class="center-text" style="font-size: 18px;">You might have noticed that some Profile Effects don't just have one outcome.</p>

                    <p class="center-text" style="font-size: 18px;">Profile Effects such as 'D20 Roll' and 'Classic Street Fighter' have a chance to play a whole new animation every time you open someone profile!</p>
                </div>

                <hr style="opacity: 0; height: 30px;">

                <div class="a2024-recap-text-card-1">
                    <h1 class="center-text abcgintonord" style="font-size: 44px; margin-top: 0px; margin-bottom: 0px;">Spring Nitro Promotion</h1>

                    <img class="a2024-recap-img-1" src="${cdn}assets/107.png">

                    <p class="center-text" style="font-size: 18px;">During Spring, if you were a first time Nitro subscriber, you would receive the 'Gyoiko Sakura' Avatar Decoration of your own to collect and use with an active Nitro subscription!</p>

                    <p class="center-text" style="font-size: 18px;">But none of that mattered since later on Discord allowed anyone to purchase the 'Gyoiko Sakura' Avatar Decoration from 'The Vault' shop category.</p>
                </div>

                <hr style="opacity: 0; height: 30px;">

                <div class="a2024-recap-text-card-1">
                    <h1 class="center-text abcgintonord" style="font-size: 44px; margin-top: 0px; margin-bottom: 0px;">See what items you got during 2024</h1>

                    <p class="experiment-subtext" style="font-size: 18px;">This will only display items you currently have, it does not have access to expired/removed items</p>

                    <details>
                        <summary>How do I find my collectibles-purchases?</summary>
                        <p>Open discord.com/app on a browser of your choice and make sure you're signed in.</p>
                        <p>Open Dev Tools by pressing CTRL + SHIFT + I (CMD + OPTION + I on mac) on your keyboard.</p>
                        <p>At the top of Dev Tools you should see the "Network" tab, if you don't see it click the two right poiting arrows for a dropdown, then click "Network".</p>
                        <p>On discord.com open your profile tab in user settings.</p>
                        <p>In the "Network" tab press CTRL + F (CMD + F on mac) on your keyboard and search "collectibles-purchases".</p>
                        <p>Go to the "Response" tab of the file, copy the contents and paste it below.</p>
                    </details>

                    <div class="input-field">
                        <p>Paste Raw collectibles-purchases Text</p>
                        <textarea style="width: 100%; height: 200px; resize: none;" id="load-raw-collectibles-purchases-by-text-input" placeholder="Paste raw collectibles-purchases text here..."></textarea>
                        <button id="load-raw-collectibles-purchases-by-text-button">Load Raw Text</button>
                        <p>Upload collectibles-purchases JSON File</p>
                        <input type="file" id="load-raw-collectibles-purchases-by-file-input" accept=".json">
                    </div>

                    <p class="experiment-subtext" style="font-size: 18px;">The file you upload will not be stored in any online servers, once the page is refreshed all data is deleted.</p>
                    <div id="collectibles-purchases-output-div"></div>
                </div>

                <hr style="opacity: 0; height: 30px;">

                <div class="a2024-recap-text-card-1" style="padding: 0px;">
                    <p class="link-text" style="font-size: 18px;" onclick="window.open('${discordsupport}${HELP_HD_STREAMING_POTION}');">HD Splash Potion</p>
                    <p class="link-text" style="font-size: 18px;" onclick="window.open('${discordsupport}${HELP_PROFILE_EFFECTS}');">Profile Effects</p>
                    <p class="link-text" style="font-size: 18px;" onclick="window.open('${discordsupport}${HELP_AVATAR_DECORATIONS}');">Avatar Decorations</p>
                    <p class="link-text" style="font-size: 18px;" onclick="window.open('${discordsupport}${HELP_SHOP}');">Shop</p>
                    <p class="center-text" style="font-size: 18px;" title="DD/MM/YYYY">This page will be visible until 1/02/2025</p>
                </div>

                <hr style="opacity: 0; height: 30px;">
            </div>
        `;


        function processJsonData(data) {
            try {
                const parsedData = JSON.parse(data);
                console.log("Parsed Data:", parsedData);
        
                const totalItems2024 = parsedData.filter(item => new Date(item.purchased_at).getFullYear() === 2024);
                const totalDecorations = totalItems2024.filter(item => item.type === 0).length;
                const totalEffects = totalItems2024.filter(item => item.type === 1).length;
                const totalBundles = totalItems2024.filter(item => item.type === 1000).length;
        
                const purchaseTypes = {
                    1: "Items purchased",
                    5: "Items claimed for free",
                    6: "Items claimed from gifts",
                    7: "Items claimed with Nitro",
                    9: "Items claimed free with Staff",
                    10: "Items claimed in Quests",
                    12: "Items claimed with Orbs"
                };
        
                const purchaseTypeCounts = {};
                Object.keys(purchaseTypes).forEach(key => {
                    const type = parseInt(key, 10);
                    purchaseTypeCounts[type] = totalItems2024.filter(item => item.purchase_type === type).length;
                });
        
                // Generate HTML content with all boxes already included
                const outputDiv = document.getElementById("collectibles-purchases-output-div");
                outputDiv.innerHTML = `
                    <div class="output-box">
                        <div class="box-header">
                            <span>Total items:</span><span>${totalItems2024.length}</span>
                        </div>
                        <div class="subtext">All items you obtained in 2024.</div>
                        <div class="box-expandable-content">
                            <ul>
                                ${totalItems2024.map(item => `<li>${item.name} (${item.sku_id})</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                    <div class="output-box">
                        <div class="box-header">
                            <span>Total Decorations:</span><span>${totalDecorations}</span>
                        </div>
                        <div class="subtext">All Avatar Decorations you obtained in 2024.</div>
                        <div class="box-expandable-content">
                            <ul>
                                ${totalItems2024.filter(item => item.type === 0).map(item => `<li>${item.name} (${item.sku_id})</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                    <div class="output-box">
                        <div class="box-header">
                            <span>Total Effects:</span><span>${totalEffects}</span>
                        </div>
                        <div class="subtext">All Profile Effects you obtained in 2024.</div>
                        <div class="box-expandable-content">
                            <ul>
                                ${totalItems2024.filter(item => item.type === 1).map(item => `<li>${item.name} (${item.sku_id})</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                    <div class="output-box">
                        <div class="box-header">
                            <span>Total Bundles:</span><span>${totalBundles}</span>
                        </div>
                        <div class="subtext">All Bundles you obtained in 2024.</div>
                        <div class="box-expandable-content">
                            <ul>
                                ${totalItems2024.filter(item => item.type === 1000).map(item => `<li>${item.name} (${item.sku_id})</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                    <div class="output-box">
                        <div class="box-header">
                            <span>Items purchased:</span><span>${purchaseTypeCounts[1] || 0}</span>
                        </div>
                        <div class="subtext">All items purchased with real money in 2024.</div>
                        <div class="box-expandable-content">
                            <ul>
                                ${totalItems2024.filter(item => item.purchase_type === 1).map(item => `<li>${item.name} (${item.sku_id})</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                    <div class="output-box">
                        <div class="box-header">
                            <span>Items claimed for free:</span><span>${purchaseTypeCounts[5] || 0}</span>
                        </div>
                        <div class="subtext">All items claimed with Nitro (Such as DISXCORE items) or when gifting Nitro in 2024.</div>
                        <div class="box-expandable-content">
                            <ul>
                                ${totalItems2024.filter(item => item.purchase_type === 5).map(item => `<li>${item.name} (${item.sku_id})</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                    <div class="output-box">
                        <div class="box-header">
                            <span>Items claimed from gifts:</span><span>${purchaseTypeCounts[6] || 0}</span>
                        </div>
                        <div class="subtext">All items claimed from a gift sent by a friend in 2024.</div>
                        <div class="box-expandable-content">
                            <ul>
                                ${totalItems2024.filter(item => item.purchase_type === 6).map(item => `<li>${item.name} (${item.sku_id})</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                    <div class="output-box">
                        <div class="box-header">
                            <span>Items claimed with Nitro:</span><span>${purchaseTypeCounts[7] || 0}</span>
                        </div>
                        <div class="subtext">All items claimed when purchasing a Nitro Subscription (Such as Gyoiko Sakura) in 2024.</div>
                        <div class="box-expandable-content">
                            <ul>
                                ${totalItems2024.filter(item => item.purchase_type === 7).map(item => `<li>${item.name} (${item.sku_id})</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                    <div class="output-box">
                        <div class="box-header">
                            <span>Items claimed free with Staff:</span><span>${purchaseTypeCounts[9] || 0}</span>
                        </div>
                        <div class="subtext">All items claimed with Staff Pannel (Or however staff claim their free collectibles) in 2024.</div>
                        <div class="box-expandable-content">
                            <ul>
                                ${totalItems2024.filter(item => item.purchase_type === 9).map(item => `<li>${item.name} (${item.sku_id})</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                    <div class="output-box">
                        <div class="box-header">
                            <span>Items claimed in Quests:</span><span>${purchaseTypeCounts[10] || 0}</span>
                        </div>
                        <div class="subtext">All items claimed when completing a Quest in 2024.</div>
                        <div class="box-expandable-content">
                            <ul>
                                ${totalItems2024.filter(item => item.purchase_type === 10).map(item => `<li>${item.name} (${item.sku_id})</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                    <div class="output-box">
                        <div class="box-header">
                            <span>Items claimed with Orbs:</span><span>${purchaseTypeCounts[12] || 0}</span>
                        </div>
                        <div class="subtext">All items purchased with Discord Orbs in 2024.</div>
                        <div class="box-expandable-content">
                            <ul>
                                ${totalItems2024.filter(item => item.purchase_type === 12).map(item => `<li>${item.name} (${item.sku_id})</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                `;
        
                // Expandable functionality for each box
                const boxes = document.querySelectorAll('.output-box .box-header');
                boxes.forEach(box => {
                    box.addEventListener('click', () => {
                        const expandableContent = box.nextElementSibling.nextElementSibling; // Grabbing the expandable content
                        if (expandableContent.classList.contains('a2024-output-box-expanded')) {
                            expandableContent.classList.remove('a2024-output-box-expanded');
                        } else {
                            expandableContent.classList.add('a2024-output-box-expanded');
                        }
                    });
                });
        
                // Log results for debugging
                console.log(`Total items purchased in 2024: ${totalItems2024.length}`);
                console.log(`Total Decorations: ${totalDecorations}`);
                console.log(`Total Effects: ${totalEffects}`);
                console.log(`Total Bundles: ${totalBundles}`);
                Object.entries(purchaseTypeCounts).forEach(([type, count]) => {
                    console.log(`${purchaseTypes[type]}: ${count}`);
                });
            } catch (error) {
                console.error("Invalid JSON format:", error.message);
            }
        }
        
        // Handle JSON from textarea
        document.getElementById('load-raw-collectibles-purchases-by-text-button').addEventListener('click', () => {
            const textareaValue = document.getElementById('load-raw-collectibles-purchases-by-text-input').value.trim();
            if (textareaValue) {
                processJsonData(textareaValue);
            } else {
                console.warn("Textarea is empty.");
            }
        });
        
        // Handle JSON file upload
        document.getElementById('load-raw-collectibles-purchases-by-file-input').addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const fileContent = e.target.result;
                    processJsonData(fileContent);
                };
                reader.readAsText(file);
            } else {
                console.warn("No file selected.");
            }
        });

    }


    function createMainShopElement() {
        document.getElementById("everything-housing-container").innerHTML = `
            <div class="shop-container" style="overflow-y: auto;">
                <div class="shop-category" style="margin-top: 50px;">
                    <template data-shop-category-template>
                        <div class="thy-shop-category-idk">
                            <img class="shop-category-marketing-bg" src="https://cdn.yapper.shop/assets/31.png" data-shop-category-marketing-bg>
                            <div class="shop-category-banner" data-shop-category-banner>
                                <div class="discordLogo_be5025" data-shop-discord-watermark-container>
                                    <div><svg class="discordIcon_be5025" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M19.73 4.87a18.2 18.2 0 0 0-4.6-1.44c-.21.4-.4.8-.58 1.21-1.69-.25-3.4-.25-5.1 0-.18-.41-.37-.82-.59-1.2-1.6.27-3.14.75-4.6 1.43A19.04 19.04 0 0 0 .96 17.7a18.43 18.43 0 0 0 5.63 2.87c.46-.62.86-1.28 1.2-1.98-.65-.25-1.29-.55-1.9-.92.17-.12.32-.24.47-.37 3.58 1.7 7.7 1.7 11.28 0l.46.37c-.6.36-1.25.67-1.9.92.35.7.75 1.35 1.2 1.98 2.03-.63 3.94-1.6 5.64-2.87.47-4.87-.78-9.09-3.3-12.83ZM8.3 15.12c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.89 2.27-2 2.27Zm7.4 0c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.88 2.27-2 2.27Z" class=""></path></svg><svg class="discordWordmark_be5025" aria-hidden="true" role="img" width="55" height="16" viewBox="0 0 55 16"><g fill="currentColor"><path d="M3 4.78717H6.89554C7.83025 4.78717 8.62749 4.93379 9.27812 5.22703C9.92875 5.52027 10.4144 5.92348 10.7352 6.44582C11.0559 6.96815 11.2208 7.5638 11.2208 8.24192C11.2208 8.90171 11.0559 9.49736 10.7168 10.038C10.3778 10.5695 9.8646 11.0002 9.17732 11.3118C8.49003 11.6234 7.6378 11.7791 6.6197 11.7791H3V4.78717ZM6.57388 10.0014C7.2071 10.0014 7.69278 9.84559 8.03184 9.52485C8.3709 9.21328 8.54501 8.77343 8.54501 8.23276C8.54501 7.72875 8.38923 7.32555 8.08682 7.02314C7.78442 6.72073 7.32623 6.56495 6.71225 6.56495H5.49255V10.0014H6.57388Z"></path><path d="M17.2882 11.7709C16.7475 11.6335 16.2618 11.4319 15.8311 11.1569V9.4983C16.161 9.75489 16.5917 9.95649 17.1416 10.1214C17.6914 10.2864 18.2229 10.3689 18.7361 10.3689C18.9743 10.3689 19.1576 10.3414 19.2767 10.2772C19.3959 10.2131 19.46 10.1398 19.46 10.0481C19.46 9.94733 19.4233 9.86485 19.3592 9.80071C19.2951 9.73656 19.1668 9.68158 18.9743 9.62659L17.7739 9.36084C17.0866 9.20506 16.6009 8.97596 16.3077 8.70105C16.0144 8.42613 15.877 8.05042 15.877 7.59223C15.877 7.20735 16.0053 6.86829 16.2527 6.58421C16.5093 6.30013 16.8667 6.0802 17.334 5.92442C17.8014 5.76863 18.342 5.68616 18.9743 5.68616C19.5333 5.68616 20.0465 5.74114 20.5138 5.86944C20.9812 5.98857 21.3661 6.14435 21.6685 6.32763V7.89464C21.3569 7.71136 20.9904 7.56474 20.5871 7.45477C20.1748 7.34481 19.7533 7.28982 19.3226 7.28982C18.6994 7.28982 18.3878 7.39979 18.3878 7.61056C18.3878 7.71136 18.4337 7.78467 18.5345 7.83966C18.6353 7.89464 18.8094 7.94046 19.066 7.99544L20.0648 8.17871C20.7155 8.28868 21.2011 8.49028 21.5219 8.77436C21.8426 9.05844 21.9984 9.47081 21.9984 10.0298C21.9984 10.6346 21.7326 11.1203 21.2011 11.4685C20.6696 11.8259 19.9182 12 18.9468 12C18.3787 11.9817 17.8289 11.9084 17.2882 11.7709Z"></path><path d="M24.4735 11.5602C23.9054 11.2761 23.4655 10.9004 23.1814 10.4239C22.8882 9.94733 22.7507 9.40666 22.7507 8.80185C22.7507 8.20621 22.8974 7.66554 23.1998 7.19819C23.5022 6.72167 23.942 6.35512 24.5194 6.0802C25.0967 5.81445 25.7931 5.677 26.5995 5.677C27.5984 5.677 28.4231 5.88776 29.0829 6.3093V8.1329C28.8538 7.97712 28.5789 7.83965 28.2673 7.74802C27.9558 7.64721 27.6259 7.6014 27.2777 7.6014C26.6545 7.6014 26.178 7.71137 25.8206 7.94046C25.4724 8.16956 25.2983 8.46279 25.2983 8.82934C25.2983 9.18673 25.4632 9.47998 25.8115 9.70907C26.1505 9.93817 26.6453 10.0573 27.2868 10.0573C27.6167 10.0573 27.9466 10.0115 28.2673 9.91067C28.5881 9.80987 28.8722 9.69991 29.1013 9.55329V11.3219C28.3681 11.7618 27.5159 11.9817 26.5537 11.9817C25.7381 11.9817 25.0509 11.8351 24.4735 11.5602Z"></path><path d="M31.6955 11.5602C31.1182 11.2761 30.6783 10.9004 30.3759 10.4147C30.0735 9.929 29.9177 9.38834 29.9177 8.78353C29.9177 8.18788 30.0735 7.64722 30.3759 7.17986C30.6783 6.71251 31.1182 6.34595 31.6863 6.0802C32.2545 5.81445 32.9418 5.677 33.7299 5.677C34.518 5.677 35.2053 5.80529 35.7743 6.0802C36.3425 6.34595 36.7824 6.71251 37.0848 7.17986C37.3872 7.64722 37.5338 8.17872 37.5338 8.78353C37.5338 9.37918 37.3872 9.929 37.0848 10.4147C36.7824 10.9004 36.3517 11.2852 35.7743 11.5602C35.1961 11.8351 34.518 11.9817 33.7299 11.9817C32.951 11.9817 32.2728 11.8351 31.6955 11.5602ZM34.7287 9.79155C34.967 9.55329 35.0953 9.22339 35.0953 8.82934C35.0953 8.42614 34.9762 8.11457 34.7287 7.87632C34.4813 7.63806 34.1514 7.51892 33.7391 7.51892C33.3084 7.51892 32.9785 7.63806 32.731 7.87632C32.4928 8.11457 32.3645 8.42614 32.3645 8.82934C32.3645 9.23255 32.4836 9.55329 32.731 9.79155C32.9785 10.039 33.3084 10.1581 33.7391 10.1581C34.1514 10.1489 34.4905 10.0298 34.7287 9.79155Z"></path><path d="M43.6644 6.0435V8.19699C43.4078 8.03204 43.0779 7.94956 42.6747 7.94956C42.1432 7.94956 41.7308 8.11451 41.4467 8.43524C41.1626 8.75598 41.016 9.25999 41.016 9.93811V11.7709H38.5693V5.9427H40.9702V7.80295C41.0985 7.12482 41.3184 6.62082 41.6117 6.30008C41.9049 5.97935 42.2898 5.80524 42.7572 5.80524C43.1054 5.80524 43.4078 5.88771 43.6644 6.0435Z"></path><path d="M51.9136 4.58649V11.7801H49.4659V10.4696C49.2552 10.9645 48.9436 11.3402 48.5221 11.5968C48.1005 11.8534 47.5782 11.9817 46.9551 11.9817C46.4052 11.9817 45.9195 11.8442 45.5072 11.5785C45.0948 11.3127 44.7741 10.937 44.5542 10.4696C44.3342 9.99313 44.2242 9.46163 44.2242 8.87514C44.2151 8.26117 44.3342 7.71134 44.5816 7.22566C44.8199 6.73998 45.1681 6.36426 45.608 6.08935C46.0479 5.81444 46.5519 5.67698 47.12 5.67698C48.2838 5.67698 49.0627 6.18099 49.4659 7.19817V4.58649H51.9136ZM49.0994 9.7457C49.3468 9.50744 49.4751 9.18671 49.4751 8.80183C49.4751 8.42612 49.356 8.12371 49.1086 7.89462C48.8611 7.66552 48.5312 7.5464 48.1189 7.5464C47.7065 7.5464 47.3766 7.66553 47.1292 7.90378C46.8818 8.14204 46.7626 8.44444 46.7626 8.82932C46.7626 9.2142 46.8818 9.51661 47.1292 9.75487C47.3766 9.99313 47.6973 10.1123 48.1097 10.1123C48.5221 10.1123 48.852 9.99313 49.0994 9.7457Z"></path><path d="M13.4751 6.29095C14.1789 6.29095 14.7489 5.77778 14.7489 5.14547C14.7489 4.51317 14.1789 4 13.4751 4C12.7723 4 12.2014 4.51317 12.2014 5.14547C12.2014 5.77778 12.7723 6.29095 13.4751 6.29095Z"></path><path d="M14.7489 7.07812C13.97 7.41719 12.9986 7.42635 12.2014 7.07812V11.7792H14.7489V7.07812Z"></path></g></svg></div>
                                </div>
                                <div id="home-page-preview-banner-container" data-shop-banner-banner-container>
                                    <img class="shop-category-banner-img" src="" data-shop-category-banner-image>
                                </div>
                                <div class="shop-category-logo-holder" data-shop-category-logo-holder>
                                    <img class="shop-category-banner-logo" src="" id="shop-banner-logo" data-shop-category-logo-image>
                                </div>
                                <div class="shop-category-text-holder">
                                    <p style="font-size: 18px;" data-shop-category-desc></p>
                                </div>
                                <!-- Timer Display -->
                                <div class="shop-expiry-timer" style="display: none;">
                                    <p class="shop-expiry-timer-timer" id="shop-expiry-timer"></p>
                                </div>
                                <div class="shop-card-tag-container" data-shop-card-tag-container>
                                </div>
                            </div>
                            <div class="shop-category-card-holder" id="shop-category-card-holder" data-shop-category-card-holder>
                            </div>
                        </div>
                    </template>
                    <template data-shop-item-card-template>
                        <div class="shop-category-card">
                            <div data-shop-card-preview-holder>
                            </div>
                            <div class="card-bottom">
                                <div title="Copy Link" data-share-product-card-button></div>
                                <a class="item-credits" data-product-card-sku-id>Failed To Load Item</a>
                                <h3 data-product-card-name>Failed To Load Item</h3>
                                <p class="shop-card-summary" data-product-card-summary>Failed To Load Item</p>
                                <div class="shop-price-container" data-shop-price-container>
                                    <a style="font-size: large; font-weight: 900;" data-price-standard></a>
                                    <a data-price-nitro></a>
                                </div>
                                <div class="shop-card-var-container" data-shop-card-var-container>
                                </div>
                                <a class="shop-card-var-title" data-shop-card-var-title></a>
                            </div>
                            <div class="card-button-container"data-product-card-open-in-shop>
                                <button class="card-button" title="Open this item in the Discord Shop">Open In Shop</button>
                            </div>
                            <div class="shop-card-tag-container" data-shop-card-tag-container>
                            </div>
                        </div>
                    </template>
                    <div data-shop-output>
                    </div>
                    <div id="shop-category-loading-container">
                    </div>
                </div>
            </div>
        `;
    }

    function createShopCategoryLoadingElement() {
        document.getElementById("shop-category-loading-container").innerHTML = `
            <div class="shop-category-loading" id="shop-category-loading">
                <div>
                    <div class="shop-category-banner-loading">
                    </div>
                    <div class="shop-category-card-holder-loading">
                        <div class="shop-category-card-loading">
                        </div>
                        <div class="shop-category-card-loading">
                        </div>
                        <div class="shop-category-card-loading">
                        </div>
                        <div class="shop-category-card-loading">
                        </div>
                        <div class="shop-category-card-loading">
                        </div>
                        <div class="shop-category-card-loading">
                        </div>
                        <div class="shop-category-card-loading">
                        </div>
                        <div class="shop-category-card-loading">
                        </div>
                    </div>
                </div>
                <div>
                    <div class="shop-category-banner-loading">
                    </div>
                    <div class="shop-category-card-holder-loading">
                        <div class="shop-category-card-loading">
                        </div>
                        <div class="shop-category-card-loading">
                        </div>
                        <div class="shop-category-card-loading">
                        </div>
                        <div class="shop-category-card-loading">
                        </div>
                        <div class="shop-category-card-loading">
                        </div>
                        <div class="shop-category-card-loading">
                        </div>
                        <div class="shop-category-card-loading">
                        </div>
                        <div class="shop-category-card-loading">
                        </div>
                    </div>
                </div>
            </div>
        `;
    }


    function createMainPotionsElement() {
        document.getElementById("everything-housing-container").innerHTML = `
            <div class="shop-container" style="overflow-y: auto;">
                <div class="shop-category" style="margin-top: 50px;">
                    <template data-potion-card-template>
                        <div>
                            <div class="potion-card-holder" data-potion-card-holder>
                                <div class="potion-card-preview-holder">
                                    <img class="potion-card-preview" src="" id="potion-card-preview" data-potion-card-preview-image>
                                </div>
                                <div class="potion-card-sku-holder">
                                    <p style="font-size: 18px;" data-potion-card-sku></p>
                                </div>
                                <div class="potion-card-title-holder">
                                    <p style="font-size: 30px;" data-potion-card-title></p>
                                </div>
                                <div class="potion-card-text-holder">
                                    <p style="font-size: 18px;" data-potion-card-desc></p>
                                </div>
                                <div class="potion-card-price-holder">
                                    <p style="font-size: 25px;" data-potion-card-price></p>
                                </div>
                            </div>
                        </div>
                    </template>
                    <div data-shop-output>
                    </div>
                    <div id="shop-category-loading-container">
                    </div>
                </div>
            </div>
        `;
    }

    function createPotionsCategoryLoadingElement() {
        document.getElementById("shop-category-loading-container").innerHTML = `
            <div class="shop-category-loading" id="shop-category-loading">
                <div>
                    <div class="potion-card-loading">
                    </div>
                    <div class="potion-card-loading">
                    </div>
                    <div class="potion-card-loading">
                    </div>
                    <div class="potion-card-loading">
                    </div>
                </div>
            </div>
        `;
    }

    function createItemToolPageElement() {
        document.getElementById("everything-housing-container").innerHTML = `
            <div style="display: flex; margin-top: 70px;">
                <div class="item-tool-card-big">
                    <h1>Avatar Decoration</h1>
        
                    <div class="shop-category-card deco-card" id="deco-preview-card" style="width: 280px;">
                        <img class="deco-preview-tool-deco" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUGFdjYAACAAAFAAGq1chRAAAAAElFTkSuQmCC" id="customDecorationPreview" alt="Deco Preview" />
                        <div class="card-bottom">
                            <a class="item-credits" id="deco-skuid-output-text">SKU ID: SKU ID</a>
                            <h3 id="deco-name-output-text">Decoration Name</h3>
                            <p class="shop-card-summary" id="deco-desc-output-text">Decoration Description</p>
                            <div class="shop-price-container">
                                <a id="deco-price-output-text" style="font-size: large; font-weight: 900;">Price Standard</a>
                                <a id="deco-price2-output-text">Price Nitro</a>
                            </div>
                        </div>
                        <div class="card-button-container">
                            <button class="card-button" title="Open item in the Discord shop">Open In Shop</button>
                        </div>
                    </div>
                    <hr style="opacity: 0;">
        
                    <div class="input-field">
                        <input type="text" id="deco-name-intput-box" placeholder="Name">
                    </div>
                    
                    <div class="input-field">
                        <input type="text" id="deco-desc-intput-box" placeholder="Description">
                    </div>
                
                    <div class="input-field">
                        <input type="text" id="deco-skuid-input-box" placeholder="SKU ID">
                    </div>
                
                    <div class="input-field">
                        <input type="text" id="deco-animated-link-input-box" placeholder="Animated Link">
                    </div>
                    <p style="display: none;" id="deco-animated-link-output-text"></p>
                
                    <div class="input-field">
                        <input type="text" id="deco-static-link-input-box" placeholder="Static Link">
                    </div>
                    <p style="display: none;" id="deco-static-link-output-text"></p>
                
                    <div class="input-field">
                        <input type="text" id="deco-price-input-box" placeholder="Price">
                    </div>
                
                    <div class="input-field">
                        <input type="text" id="deco-price2-input-box" placeholder="Nitro Price">
                    </div>
                
                    <button id="custom-deco-copy-button">Copy for API</button>

                    <div class="customDecorationDataURLContainer">
                        <div class="input-field">
                            <p>Upload Item Asset</p>
                            <input type="file" id="customDecorationInput" accept="image/*">
                        </div>
                        <div class="input-field" style="display: none;">
                            <input type="text" id="customDecorationUrlInput" placeholder="Enter custom decoration URL">
                            <button id="loadCustomDecorationUrl">Load Decoration from URL</button>
                        </div>
                        <div class="input-field json-input-field" style="display: none;">
                            <div class="output-section">
                                <textarea style="width: 100%; height: 200px;" id="deco-dataUrlOutput" readonly placeholder="Data URL will appear here..."></textarea>
                            </div>
                        </div>
                    </div>
        
                    <div class="input-field json-input-field">
                        <p>Load item from JSON</p>
                        <textarea style="width: 100%; height: 200px;" id="deco-json-input" placeholder='Paste Shop Archives item API here'></textarea>
                        <button id="deco-load-json-button">Load JSON</button>
                    </div>
                </div>
    
                <div class="item-tool-card-big">
                    <h1>Profile Effect</h1>
    
                    <div class="shop-category-card effect-card" id="effect-preview-card" style="width: 280px;">
                        <img class="effect-preview-tool-effect" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAtJREFUGFdjYAACAAAFAAGq1chRAAAAAElFTkSuQmCC" id="customEffectPreview" alt="Effect Preview" />
                        <div class="card-bottom">
                            <a class="item-credits" id="effect-skuid-output-text">SKU ID: SKU ID</a>
                            <h3 id="effect-name-output-text">Effect Name</h3>
                            <p class="shop-card-summary" id="effect-desc-output-text">Effect Description</p>
                            <div class="shop-price-container">
                                <a id="effect-price-output-text" style="font-size: large; font-weight: 900;">Price Standard</a>
                                <a id="effect-price2-output-text">Price Nitro</a>
                            </div>
                        </div>
                        <div class="card-button-container">
                            <button class="card-button" title="Open item in the Discord shop">Open In Shop</button>
                        </div>
                    </div>
                    <hr style="opacity: 0;">
        
                    <div class="input-field">
                        <input type="text" id="effect-name-intput-box" placeholder="Name">
                    </div>
                    
                    <div class="input-field">
                        <input type="text" id="effect-desc-intput-box" placeholder="Description">
                    </div>
                
                    <div class="input-field">
                        <input type="text" id="effect-skuid-input-box" placeholder="SKU ID">
                    </div>
                
                    <div class="input-field">
                        <input type="text" id="effect-animated-link-input-box" placeholder="Animated Link">
                    </div>
                    <p style="display: none;" id="effect-animated-link-output-text"></p>
                
                    <div class="input-field">
                        <input type="text" id="effect-static-link-input-box" placeholder="Static Link">
                    </div>
                    <p style="display: none;" id="effect-static-link-output-text"></p>
                
                    <div class="input-field">
                        <input type="text" id="effect-price-input-box" placeholder="Price">
                    </div>
                
                    <div class="input-field">
                        <input type="text" id="effect-price2-input-box" placeholder="Nitro Price">
                    </div>
                
                    <button id="custom-effect-copy-button">Copy for API</button>

                    <div class="customEffectsDataURLContainer">
                        <div class="input-field">
                            <p>Upload Item Asset</p>
                            <input type="file" id="customEffectInput" accept="image/*">
                        </div>
                        <div class="input-field" style="display: none;">
                            <input type="text" id="customEffectUrlInput" placeholder="Enter custom effect URL">
                            <button id="loadCustomEffectUrl">Load Effect from URL</button>
                        </div>
                        <div class="input-field json-input-field" style="display: none;">
                            <div class="output-section">
                                <textarea style="width: 700px; height: 200px;" id="effect-dataUrlOutput" readonly placeholder="Data URL will appear here..."></textarea>
                            </div>
                        </div>
                    </div>
    
                    <div class="input-field json-input-field">
                        <p>Load item from JSON</p>
                        <textarea style="width: 100%; height: 200px;" id="effect-json-input" placeholder='Paste Shop Archives item API here'></textarea>
                        <button id="effect-load-json-button">Load JSON</button>
                    </div>
                </div>

            </div>
        `;

        
        const customDecorationInput = document.getElementById('customDecorationInput');
        const customDecorationUrlInput = document.getElementById('customDecorationUrlInput');
        const loadCustomDecorationUrlButton = document.getElementById('loadCustomDecorationUrl');
        const customDecorationPreview = document.getElementById('customDecorationPreview');
        const decoDataUrlOutput = document.getElementById('deco-dataUrlOutput');
        
        // Function to handle file upload
        customDecorationInput.addEventListener('change', function(event) {
          const file = event.target.files[0];
          if (file) {
            const reader = new FileReader();
            
            reader.onload = function(e) {
              const dataUrl = e.target.result;
              
              // Display custom decoration preview
              customDecorationPreview.src = dataUrl;
              customDecorationPreview.style.display = 'block';
        
              // Display Data URL
              decoDataUrlOutput.textContent = dataUrl;
            };
            
            reader.readAsDataURL(file);
          }
        });
        
        // Function to handle custom decoration URL input
        loadCustomDecorationUrlButton.addEventListener('click', function() {
          const customDecorationUrl = customDecorationUrlInput.value;
          
          if (customDecorationUrl) {
            const img = new Image();
            img.crossOrigin = 'Anonymous'; // This is needed to avoid CORS issues
        
            img.onload = function() {
              const canvas = document.createElement('canvas');
              canvas.width = img.width;
              canvas.height = img.height;
              const ctx = canvas.getContext('2d');
              
              ctx.drawImage(img, 0, 0);
        
              // Convert custom decoration to Data URL
              const dataUrl = canvas.toDataURL('image/png');
        
              // Display custom decoration preview
              customDecorationPreview.src = dataUrl;
              customDecorationPreview.style.display = 'block';
        
              // Display Data URL
              decoDataUrlOutput.textContent = dataUrl;
            };
        
            img.src = customDecorationUrl;
          }
        });
        
        
        
        
        
        
        const inputs = {
          name: document.getElementById('deco-name-intput-box'),
          description: document.getElementById('deco-desc-intput-box'),
          id: document.getElementById('deco-skuid-input-box'),
          animatedLink: document.getElementById('deco-animated-link-input-box'),
          staticLink: document.getElementById('deco-static-link-input-box'),
          price: document.getElementById('deco-price-input-box'),
          price2: document.getElementById('deco-price2-input-box')
        };
        
        // Define output elements
        const outputs = {
          name: document.getElementById('deco-name-output-text'),
          description: document.getElementById('deco-desc-output-text'),
          id: document.getElementById('deco-skuid-output-text'),
          animatedLink: document.getElementById('deco-animated-link-output-text'),
          staticLink: document.getElementById('deco-static-link-output-text'),
          price: document.getElementById('deco-price-output-text'),
          price2: document.getElementById('deco-price2-output-text')
        };
        
        const decoImagePreview = document.getElementById('customDecorationPreview');
        const decoPreviewCard = document.getElementById('deco-preview-card');
        let DecoStaticLink = '';
        let DecoAnimatedLink = '';
        
        // Add event listeners to update text live
        for (const key in inputs) {
          inputs[key].addEventListener('input', function() {
              outputs[key].textContent = `${inputs[key].value}`;
        
              if (key === 'staticLink') {
                DecoStaticLink = inputs.staticLink.value;
                decoImagePreview.src = DecoStaticLink;
            } else if (key === 'animatedLink') {
              DecoAnimatedLink = inputs.animatedLink.value;
            }
          });
        }
        
        decoPreviewCard.addEventListener('mouseenter', function() {
          if (DecoAnimatedLink) {
            decoImagePreview.src = DecoAnimatedLink;
          }
        });
        
        // Reset image source to static link on mouse leave
        decoPreviewCard.addEventListener('mouseleave', function() {
          if (DecoStaticLink) {
            decoImagePreview.src = DecoStaticLink;
          }
        });
        
        // Load JSON from textarea into inputs
        document.getElementById('deco-load-json-button').addEventListener('click', function() {
          try {
              const jsonData = JSON.parse(document.getElementById('deco-json-input').value);
              
              // Populate the input fields with the JSON data
              inputs.name.value = jsonData.name || "";
              inputs.description.value = jsonData.summary || "";
              inputs.id.value = jsonData.sku_id || "";
              inputs.price.value = jsonData.price || "";
              inputs.price2.value = jsonData.price_nitro || "";
              inputs.staticLink.value = jsonData.items[0].static || "";
              inputs.animatedLink.value = jsonData.items[0].animated || "";
        
              // Trigger input events to update the live preview
              for (const key in inputs) {
                  inputs[key].dispatchEvent(new Event('input'));
              }
          } catch (e) {
              alert("Invalid JSON! Please check the format.");
          }
        });
        
        // Copy button functionality
        document.getElementById('custom-deco-copy-button').addEventListener('click', function() {
          // Create JSON string for API use
          const jsonData = {
              name: inputs.name.value,
              summary: inputs.description.value,
              sku_id: inputs.id.value,
              price: inputs.price.value,
              price_nitro: inputs.price2.value,
              unpublished_at: null,
              isNew: "false",
              emojiCopy: null,
              items: [
                  {
                      item_type: "deco",
                      name: inputs.name.value,
                      static: inputs.staticLink.value,
                      animated: inputs.animatedLink.value,
                      summary: inputs.description.value
                  }
              ]
          };
        
          // Stringify JSON data with indentation for better formatting
          const jsonString = JSON.stringify(jsonData, null, 4);
        
          // Create a temporary textarea to hold the text
          const tempTextarea = document.createElement('textarea');
          tempTextarea.value = jsonString;
          document.body.appendChild(tempTextarea);
          tempTextarea.select();
          document.execCommand('copy');
          document.body.removeChild(tempTextarea);
        });
        
        
        
        
        
        const customEffectInput = document.getElementById('customEffectInput');
        const customEffectUrlInput = document.getElementById('customEffectUrlInput');
        const loadCustomEffectUrlButton = document.getElementById('loadCustomEffectUrl');
        const customEffectPreview = document.getElementById('customEffectPreview');
        const effectDataUrlOutput = document.getElementById('effect-dataUrlOutput');
        
        // Function to handle file upload
        customEffectInput.addEventListener('change', function(event) {
          const file = event.target.files[0];
          if (file) {
            const reader = new FileReader();
            
            reader.onload = function(e) {
              const dataUrl = e.target.result;
              
              // Display custom Effect preview
              customEffectPreview.src = dataUrl;
              customEffectPreview.style.display = 'block';
        
              // Display Data URL
              effectDataUrlOutput.textContent = dataUrl;
            };
            
            reader.readAsDataURL(file);
          }
        });
        
        // Function to handle custom Effect URL input
        loadCustomEffectUrlButton.addEventListener('click', function() {
          const customEffectUrl = customEffectUrlInput.value;
          
          if (customEffectUrl) {
            const img = new Image();
            img.crossOrigin = 'Anonymous'; // This is needed to avoid CORS issues
        
            img.onload = function() {
              const canvas = document.createElement('canvas');
              canvas.width = img.width;
              canvas.height = img.height;
              const ctx = canvas.getContext('2d');
              
              ctx.drawImage(img, 0, 0);
        
              // Convert custom Effect to Data URL
              const dataUrl = canvas.toDataURL('image/png');
        
              // Display custom Effect preview
              customEffectPreview.src = dataUrl;
              customEffectPreview.style.display = 'block';
        
              // Display Data URL
              effectDataUrlOutput.textContent = dataUrl;
            };
        
            img.src = customEffectUrl;
          }
        });
        
        
        
        
        
        
        const effectinputs = {
          name: document.getElementById('effect-name-intput-box'),
          description: document.getElementById('effect-desc-intput-box'),
          id: document.getElementById('effect-skuid-input-box'),
          animatedLink: document.getElementById('effect-animated-link-input-box'),
          staticLink: document.getElementById('effect-static-link-input-box'),
          price: document.getElementById('effect-price-input-box'),
          price2: document.getElementById('effect-price2-input-box')
        };
        
        // Define output elements
        const effectoutputs = {
          name: document.getElementById('effect-name-output-text'),
          description: document.getElementById('effect-desc-output-text'),
          id: document.getElementById('effect-skuid-output-text'),
          animatedLink: document.getElementById('effect-animated-link-output-text'),
          staticLink: document.getElementById('effect-static-link-output-text'),
          price: document.getElementById('effect-price-output-text'),
          price2: document.getElementById('effect-price2-output-text')
        };
        
        const effectImagePreview = document.getElementById('customEffectPreview');
        const effectPreviewCard = document.getElementById('effect-preview-card');
        let effectStaticLink = '';
        let effectAnimatedLink = '';
        
        // Add event listeners to update text live
        for (const key in effectinputs) {
          effectinputs[key].addEventListener('input', function() {
            effectoutputs[key].textContent = `${effectinputs[key].value}`;
        
              if (key === 'staticLink') {
                effectStaticLink = effectinputs.staticLink.value;
                effectImagePreview.src = effectStaticLink;
            } else if (key === 'animatedLink') {
              effectAnimatedLink = effectinputs.animatedLink.value;
            }
          });
        }
        
        effectPreviewCard.addEventListener('mouseenter', function() {
          if (effectAnimatedLink) {
            effectImagePreview.src = effectAnimatedLink;
          }
        });
        
        // Reset image source to static link on mouse leave
        effectPreviewCard.addEventListener('mouseleave', function() {
          if (effectStaticLink) {
            effectImagePreview.src = effectStaticLink;
          }
        });
        
        // Load JSON from textarea into inputs
        document.getElementById('effect-load-json-button').addEventListener('click', function() {
          try {
              const jsonData = JSON.parse(document.getElementById('effect-json-input').value);
              
              // Populate the input fields with the JSON data
              effectinputs.name.value = jsonData.name || "";
              effectinputs.description.value = jsonData.summary || "";
              effectinputs.id.value = jsonData.sku_id || "";
              effectinputs.price.value = jsonData.price || "";
              effectinputs.price2.value = jsonData.price_nitro || "";
              effectinputs.staticLink.value = jsonData.items[0].static || "";
              effectinputs.animatedLink.value = jsonData.items[0].animated || "";
        
              // Trigger input events to update the live preview
              for (const key in effectinputs) {
                effectinputs[key].dispatchEvent(new Event('input'));
              }
          } catch (e) {
              alert("Invalid JSON! Please check the format.");
          }
        });
        
        // Copy button functionality
        document.getElementById('custom-effect-copy-button').addEventListener('click', function() {
          // Create JSON string for API use
          const jsonData = {
              name: effectinputs.name.value,
              summary: effectinputs.description.value,
              sku_id: effectinputs.id.value,
              price: effectinputs.price.value,
              price_nitro: effectinputs.price2.value,
              unpublished_at: null,
              isNew: "false",
              emojiCopy: null,
              items: [
                  {
                      item_type: "effect",
                      name: effectinputs.name.value,
                      static: effectinputs.staticLink.value,
                      animated: effectinputs.animatedLink.value,
                      summary: effectinputs.description.value
                  }
              ]
          };
        
          // Stringify JSON data with indentation for better formatting
          const jsonString = JSON.stringify(jsonData, null, 4);
        
          // Create a temporary textarea to hold the text
          const tempTextarea = document.createElement('textarea');
          tempTextarea.value = jsonString;
          document.body.appendChild(tempTextarea);
          tempTextarea.select();
          document.execCommand('copy');
          document.body.removeChild(tempTextarea);
        });
    }



    function createPublishedListingsPageElement() {
        document.getElementById("everything-housing-container").innerHTML = `
            <div class="published-listings-tester-card">

                <h1>Check Published Listing by SKU ID</h1>

                <div id="sku-is-valid-or-not-container"></div>

                <input type="text" id="sku-id-input" placeholder="Please Input SKU ID">

                <button onclick="checkValidSKUID()">Check</button>
                
            </div>
        `;
    }

    function checkValidSKUID() {
        const SKUinput = document.getElementById('sku-id-input').value;

        document.getElementById('sku-is-valid-or-not-container').innerHTML = ``;

        fetch(`https://canary.discord.com/api/v9/store/published-listings/skus/${SKUinput}`)
            .then(response => response.json())
            .then((data) => {
                if (data.sku.price != null) {

                    priceStandard = data.sku.price.amount;
            
                    if (data.sku.price.premium != null) {
                        priceNitro = data.sku.price.premium["2"].amount;
                    }
            
                    priceStandardOutput = `US$${(priceStandard / 100).toFixed(2)}`;
            
                    if (data.sku.price.premium != null) {
                        priceNitroOutput = ` or US$${(priceNitro / 100).toFixed(2)} with Nitro`;
                    } else {
                        priceNitroOutput = '';
                    }

                    document.getElementById('sku-is-valid-or-not-container').innerHTML = `
                        <div class="shop-success">
                            <p class="shop-notice-text">The Item '${data.sku.name}' is valid and purchasable for ${priceStandardOutput}${priceNitroOutput}!</p>
                        </div>
                    `;

                } else {
                    document.getElementById('sku-is-valid-or-not-container').innerHTML = `
                        <div class="shop-success">
                            <p class="shop-notice-text">The Category '${data.sku.name}' is valid and published!</p>
                        </div>
                    `;
                }
            })
            .catch(error => {
                if (SKUinput != '') {
                    document.getElementById('sku-is-valid-or-not-container').innerHTML = `
                        <div class="shop-warning">
                            <p class="shop-notice-text">The SKU ID '${SKUinput}' is either invalid or unpublished!</p>
                        </div>
                    `;
                } else {
                    document.getElementById('sku-is-valid-or-not-container').innerHTML = `
                        <div class="shop-warning">
                            <p class="shop-notice-text">Please input an SKU ID below!</p>
                        </div>
                    `;
                }
                console.error(error);
            });
    }



    function optionsSidebarToggle() {
        if (document.getElementById('options-sidebar-container').classList.contains('options-sidebar-container-expanded')) {
            document.getElementById('options-sidebar-container').classList.remove("options-sidebar-container-expanded");
        } else {
            document.getElementById('options-sidebar-container').classList.add("options-sidebar-container-expanded");
            document.getElementById('options-sidebar-container').innerHTML = `
                <h1 class="center-text" style="font-size: 30px; margin-top: 20px; margin-bottom: 0px;">Options</h1>
                <div class="experiment-card-holder" style="width: 300px; margin-left: auto; margin-right: auto;">
                    <div class="experiment-card" id="is-in-shop-box-option">
                        <p>Shop: Display all Item Variants</p>
                        <p class="experiment-subtext">This will display all vatiants of an item</p>
                        <input class="options-toggle-box" onclick="inShopIsChecked();" style="cursor: pointer; scale: 2; posision: center;" id="is-in-shop-box" type="checkbox">
                    </div>
                    <div class="experiment-card" id="reduced-motion-box-option">
                        <p>Reduced Motion</p>
                        <p class="experiment-subtext">Stops some things from playing an animation</p>
                        <input class="options-toggle-box" onclick="reducedMotionChecked();" style="cursor: pointer; scale: 2; posision: center;" id="reduced-motion-box" type="checkbox">
                    </div>
                    <div class="experiment-card" id="disable-banner-overrides-box-option">
                        <p>Disable Banner Overrides</p>
                        <p class="experiment-subtext">Disables some banner elements from being changed by the client</p>
                        <input class="options-toggle-box" onclick="disableBannerOverridesChecked();" style="cursor: pointer; scale: 2; posision: center;" id="disable-banner-overrides-box" type="checkbox">
                    </div>
                </div>
                <h1 class="center-text" style="font-size: 30px; margin-top: 20px; margin-bottom: 0px;">Downloads</h1>
                <div>
                    <div class="experiment-card-holder" style="width: 300px; margin-left: auto; margin-right: auto;">
                    <template id="downloadables-api-template">
                        <div class="item experiment-card">
                            <p class="name"></p>
                            <p class="summary experiment-subtext"></p>
                            <div class="downloadables"></div>
                        </div>
                    </template>
                    <div class="experiment-card-holder" id="downloadables-output"></div>
                </div>
                <p class="center-text" style="font-size: 30px; margin-top: 20px; margin-bottom: 0px;">Discord Help Articles</p>
                <div id="discord-help-articles-output">
                    <div class="experiment-card-holder" style="width: 300px; margin-left: auto; margin-right: auto;">
                        <button class="card-button" onclick="window.open('${discordsupport}${HELP_SHOP}');">Shop</button>
                        <button class="card-button" onclick="window.open('${discordsupport}${HELP_AVATAR_DECORATIONS}');">Avatar Decorations</button>
                        <button class="card-button" onclick="window.open('${discordsupport}${HELP_PROFILE_EFFECTS}');">Profile Effects</button>
                        <button class="card-button" onclick="window.open('${discordsupport}${HELP_HD_STREAMING_POTION}');">HD Splash Potion</button>
                    </div>
                </div>
                <p class="center-text" style="font-size: 30px; margin-top: 20px; margin-bottom: 0px;">Shop Archives</p>
                <div class="experiment-card-holder" style="width: 300px; margin-left: auto; margin-right: auto;">
                    <button class="card-button" onclick="window.open('https://discord.gg/Mcwh7hGcWb/');">Discord Server</button>
                    <button class="card-button" onclick="window.open('https://github.com/Yappering/');">Github</button>
                    <button class="card-button" onclick="window.open('https://www.youtube.com/@DTACat');">DTACat Youtube</button>
                </div>
                App Version: ${tcbx926n29}
            `;

            if (localStorage.fetch_collectibles_variants == "true") {
                document.getElementById("is-in-shop-box").checked = true;
            }
        
            if (localStorage.fetch_collectibles_variants == "none") {
                document.getElementById("is-in-shop-box").checked = true;
            }
    
            if (localStorage.reduced_motion == "true") {
                document.getElementById("reduced-motion-box").checked = true;
            }

            if (localStorage.disable_client_banner_overrides == "true") {
                document.getElementById("disable-banner-overrides-box").checked = true;
            }

            fetch(api + DOWNLOADABLE_DATA)
                .then(response => response.json())
                .then(data => {
                    // Call the function to display the data
                    displayData(data);
                })
                .catch(error => {
                    console.error('Error fetching the API:', error);
                });
                
                // Function to display the data in the HTML
                function displayData(data) {
                const content = document.getElementById('downloadables-output');
                const template = document.getElementById('downloadables-api-template');
                
                data.forEach(item => {
                    // Clone the template
                    const clone = template.content.cloneNode(true);
                
                    // Fill in the name and summary
                    clone.querySelector('.name').textContent = item.name;
                    clone.querySelector('.summary').textContent = item.summary;
                
                    if (item.id === "discord_marketing") {
                        // Add buttons for downloadables
                        const downloadablesDiv = clone.querySelector('.downloadables');
                        item.downloadables.forEach(downloadable => {
                            const button = document.createElement('button');
                            button.textContent = `${downloadable.id}: ` + downloadable.name;
                            button.classList.add('card-button');
                            button.addEventListener('click', () => {
                                window.open('https://item.yapper.shop/marketing/' + downloadable.id + '/data.zip', '_blank');
                            });
                            downloadablesDiv.appendChild(button);
                        });
                    }

                    if (item.id === "profiles_plus_marketing") {
                        // Add buttons for downloadables
                        const downloadablesDiv = clone.querySelector('.downloadables');
                        item.downloadables.forEach(downloadable => {
                            const button = document.createElement('button');
                            button.textContent = `${downloadable.id}: ` + downloadable.name;
                            button.classList.add('card-button');
                            button.addEventListener('click', () => {
                                window.open('https://item.yapper.shop/profiles-plus-marketing/' + downloadable.id + '/data.zip', '_blank');
                            });
                            downloadablesDiv.appendChild(button);
                        });
                    }
                
                    // Append the cloned template to the content
                    content.appendChild(clone);
                });
            }
        }
    }

    function inShopIsChecked() {
        if (localStorage.fetch_collectibles_variants != "true") {
            localStorage.fetch_collectibles_variants = "true"
        }
        else {
            localStorage.fetch_collectibles_variants = "false"
        }
        if (typeof fetchData === 'function') {
            fetchData(pageCheck());
        }
    }

    function reducedMotionChecked() {
        if (localStorage.reduced_motion != "true") {
            localStorage.reduced_motion = "true"
        }
        else {
            localStorage.reduced_motion = "false"
        }
        if (typeof fetchData === 'function') {
            fetchData(pageCheck());
        }
    }

    function disableBannerOverridesChecked() {
        if (localStorage.disable_client_banner_overrides != "true") {
            localStorage.disable_client_banner_overrides = "true"
        }
        else {
            localStorage.disable_client_banner_overrides = "false"
        }
        if (typeof fetchData === 'function') {
            fetchData(pageCheck());
        }
    }
    
    function noBundlesInShopIsChecked() {
        if (localStorage.shop_have_no_bundles != "true") {
            localStorage.shop_have_no_bundles = "true"
        }
        else {
            localStorage.shop_have_no_bundles = "false"
        }
        if (typeof fetchData === 'function') {
            pageCheck();
        }
    }
    
    function openMobileModal() {
        const lost_modal = document.getElementById('modal-housing');
        lost_modal.innerHTML = `
        <div class="modal-housing-1" id="modal-housing-1">
            <div class="lost-modal">
                <div class="lost-modal-inner">
                    <h1 class="center-text" style="font-size: 54px; margin-top: 40px;">Looks like you're on mobile</h1>
                    <p>Would you like to use the mobile client?</p>
                    <button class="refresh-button" onclick="location.href='https://m.yapper.shop/';">Yes</button>
                    <button class="refresh-button" onclick="closeMobileModal()">No</button>
                </div>
            </div>
        </div>
    `;
    }
    
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        openMobileModal()
    }
    
    function openOptionsModal() {
        const options_modal = document.getElementById('modal-housing');
        options_modal.innerHTML = `
        <div class="modal-housing-1" id="modal-housing-1">
            <div class="lost-modal">
                <div class="lost-modal-inner">
                    <h1 class="center-text" style="font-size: 54px; margin-top: 40px;">Options</h1>
                    <div>
                        <div class="experiment-card-holder">
                            <div class="experiment-card" id="is-in-shop-box-option">
                                <p>Shop: Hide removed items</p>
                                <p class="experiment-subtext">This will hide all categories that are not currently in the shop</p>
                                <input class="options-toggle-box" onclick="inShopIsChecked();" style="cursor: pointer; scale: 2; posision: center;" id="is-in-shop-box" type="checkbox">
                            </div>
                            <div class="experiment-card">
                                <p>Shop: Hide bundles</p>
                                <p class="experiment-subtext">This will hide all bundles in the shop page</p>
                                <input class="options-toggle-box" onclick="noBundlesInShopIsChecked();" style="cursor: pointer; scale: 2; posision: center;" id="no-bundles-in-shop-box" type="checkbox">
                            </div>
                        </div>
                    </div>
                    <button class="refresh-button" onclick="closeLostModal()">Close</button>
                </div>
            </div>
        </div>
        `;
    
        if (localStorage.fetch_collectibles_variants == "true") {
            document.getElementById("is-in-shop-box").checked = true;
        }
    
        if (localStorage.fetch_collectibles_variants == "none") {
            document.getElementById("is-in-shop-box").checked = true;
        }
    
        if (localStorage.items_in_shop != "true") {
            if (localStorage.items_in_shop != "none") {
                document.getElementById("is-in-shop-box-option").style.display = 'none';
            }
        }
    
    
        if (localStorage.shop_have_no_bundles == "true") {
            document.getElementById("no-bundles-in-shop-box").checked = true;
        }
    }
    
    function openDownloadsModal() {
        const downloads_modal = document.getElementById('modal-housing');
        downloads_modal.innerHTML = `
        <div class="modal-housing-1" id="modal-housing-1">
            <div class="dev-modal">
                <div class="dev-modal-inner">
                    <h1 class="center-text" style="font-size: 54px; margin-top: 40px;">Manual Downloads</h1>
                    <p style="margin-top: -50px;">Experimental</p>
                    <div>
                        <div class="experiment-card-holder">
                        <template id="downloadables-api-template">
                            <div class="item experiment-card">
                                <p class="name"></p>
                                <p class="summary experiment-subtext"></p>
                                <div class="downloadables"></div>
                            </div>
                        </template>
                        <div class="experiment-card-holder" id="downloadables-output"></div>
                    </div>
                    <button class="refresh-button" onclick="closeLostModal()">Close</button>
                </div>
            </div>
        </div>
        `;
        
        // Fetch the data from the API
        fetch(DOWNLOADABLE_DATA)
            .then(response => response.json())
            .then(data => {
                // Call the function to display the data
                displayData(data);
            })
            .catch(error => {
                console.error('Error fetching the API:', error);
            });
            
            // Function to display the data in the HTML
            function displayData(data) {
            const content = document.getElementById('downloadables-output');
            const template = document.getElementById('downloadables-api-template');
            
            data.forEach(item => {
                // Clone the template
                const clone = template.content.cloneNode(true);
            
                // Fill in the name and summary
                clone.querySelector('.name').textContent = item.name;
                clone.querySelector('.summary').textContent = item.summary;
            
                // Add buttons for downloadables
                const downloadablesDiv = clone.querySelector('.downloadables');
                item.downloadables.forEach(downloadable => {
                    const button = document.createElement('button');
                    button.textContent = downloadable.name;
                    button.classList.add('card-button');
                    button.addEventListener('click', () => {
                        window.open(downloadable.url, '_blank');
                    });
                    downloadablesDiv.appendChild(button);
                });
            
                // Append the cloned template to the content
                content.appendChild(clone);
            });
        }
    
    }
    
    
    function openDevModal() {
        if (localStorage.dev == "true") {
            document.getElementById('modal-housing').innerHTML = `
            <div class="modal-housing-1" id="modal-housing-1">
                <div class="dev-modal">
                    <div class="dev-modal-inner">
                        <h1 class="center-text" style="font-size: 54px; margin-top: -10px; margin-bottom: -5px;">Dev Options</h1>
                        <p>Greetings Shop Archives Staff and/or Dataminer! This model has everything only available for developers, only use this if you know what you're doing. Don't break anything :)</p>
                        <button class="refresh-button" onclick="closeDevModal()">Close</button>
                        <button class="refresh-button" onclick="turnOffDevMode()">Safe Mode</button>
                        <hr>
                        <div>
                            <h2>Experiments</h2>
                            <p class="experiment-subtext">Test out new features</p>
                            <div class="experiment-card-holder">


                                <div class="experiment-card">
                                    <p>Profiles Plus Marketing Variants</p>
                                    <p class="experiment-subtext">2024-12_profiles_plus_marketing_variants</p>
                                    <div id="experiment-default-rollout-data-2024-12_profiles_plus_marketing_variants"></div>
                                    <button class="refresh-button" onclick="profilesPlusMarketingVariants1()" id="2024-12_profiles_plus_marketing_variants-1" title="Paper Beach V2">Override 1</button>
                                    <button class="refresh-button" onclick="profilesPlusMarketingVariants00()" id="2024-12_profiles_plus_marketing_variants-00">Override -1</button>
                                    <button class="refresh-button" onclick="profilesPlusMarketingVariants0()" id="2024-12_profiles_plus_marketing_variants-0">Clear Override</button>
                                </div>


                                <div class="experiment-card">
                                    <p>Collectibles Variants</p>
                                    <p class="experiment-subtext">2024-11_collectibles_variants</p>
                                    <div id="experiment-default-rollout-data-2024-11_collectibles_variants"></div>
                                    <button class="refresh-button" onclick="collectiblesVariants1()" id="2024-11_collectibles_variants-1">Override 1</button>
                                    <button class="refresh-button" onclick="collectiblesVariants00()" id="2024-11_collectibles_variants-00">Override -1</button>
                                    <button class="refresh-button" onclick="collectiblesVariants0()" id="2024-11_collectibles_variants-0">Clear Override</button>
                                </div>


                                <div class="experiment-card">
                                    <p>2024 Recap</p>
                                    <p class="experiment-subtext">2024-11_recap</p>
                                    <div id="experiment-default-rollout-data-2024-11_recap"></div>
                                    <button class="refresh-button" onclick="recap2024Items1()" id="2024-11_recap-1">Override 1</button>
                                    <button class="refresh-button" onclick="recap2024Items00()" id="2024-11_recap-00">Override -1</button>
                                    <button class="refresh-button" onclick="recap2024Items0()" id="2024-11_recap-0">Clear Override</button>
                                </div>
        
                                
                            </div>
                        </div>
                        <hr>
                        <div>
                            <h2>Debug</h2>
                            <p class="experiment-subtext">Overrides</p>
                            <div class="experiment-card-holder">
                                <div class="experiment-card">
                                    <p>Force Private API</p>
                                    <p class="experiment-subtext">2024-12_force_all_api_to_fectch_private_api</p>
                                    <button class="refresh-button" onclick="forceAllApiToFectchPrivateApiTrue()" id="2024-12_force_all_api_to_fectch_private_api-1">Override 1</button>
                                    <button class="refresh-button" onclick="forceAllApiToFectchPrivateApiFalse()" id="2024-12_force_all_api_to_fectch_private_api-2">No Override</button>
                                </div>
                                <div class="experiment-card">
                                    <p>Show Leaks Button</p>
                                    <p class="experiment-subtext">2024-11_override_leaks_button</p>
                                    <button class="refresh-button" onclick="overrideLeaksButtonShow()" id="2024-11_override_leaks_button-1">Override 1</button>
                                    <button class="refresh-button" onclick="overrideLeaksButtonHide()" id="2024-11_override_leaks_button-2">No Override</button>
                                </div>
                                <div class="experiment-card">
                                    <p>Project Joshua</p>
                                    <p class="experiment-subtext">2024-11_unreleased_discord_collectibles</p>
                                    <button class="refresh-button" onclick="unreleasedDiscordCollectiblesTrue()" id="2024-11_unreleased_discord_collectibles-1">Override 1</button>
                                    <button class="refresh-button" onclick="unreleasedDiscordCollectiblesFalse()" id="2024-11_unreleased_discord_collectibles-2">No Override</button>
                                </div>
                                <div class="experiment-card">
                                    <p>Unreleased Profiles Plus Items</p>
                                    <p class="experiment-subtext">2024-09_profiles_plus</p>
                                    <button class="refresh-button" onclick="unreleasedProfilesPlusItemsTrue()" id="2024-09_profiles_plus-1">Override 1</button>
                                    <button class="refresh-button" onclick="unreleasedProfilesPlusItemsFalse()" id="2024-09_profiles_plus-2">No Override</button>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div>
                            <h2>Modals</h2>
                            <div class="experiment-card-holder">
                                <div class="experiment-card">
                                    <p>Lost</p>
                                    <p class="experiment-subtext">modal no longer supported on client</p>
                                    <button class="refresh-button" onclick="openLostModal()">Open</button>
                                </div>
                                <div class="experiment-card">
                                    <p>Dev</p>
                                    <button class="refresh-button" onclick="openDevModal()">Open</button>
                                </div>
                                <div class="experiment-card">
                                    <p>Options</p>
                                    <button class="refresh-button" onclick="openOptionsModal()">Open</button>
                                </div>
                                <div class="experiment-card">
                                    <p>Downloads</p>
                                    <button class="refresh-button" onclick="openDownloadsModal()">Open</button>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div>
                            <h2>Dismissible Content</h2>
                            <p class="experiment-subtext">Overrides</p>
                            <div class="experiment-card-holder">
                            <div class="experiment-card">
                                    <p>Paper Beach V2 Marketing</p>
                                    <p class="experiment-subtext">dismissible_paper_beach_v2_marketing</p>
                                    <input class="options-toggle-box" onclick="dismissibleContent_PaperBeachV2MarketingChecked();" style="cursor: pointer; scale: 2; posision: center;" id="dismissible_paper_beach_v2_marketing-box" type="checkbox">
                                </div>
                                <div class="experiment-card">
                                    <p>Recap 2024</p>
                                    <p class="experiment-subtext">dismissible_recap_2024</p>
                                    <input class="options-toggle-box" onclick="dismissibleContent_Recap2024Checked();" style="cursor: pointer; scale: 2; posision: center;" id="dismissible_recap_2024-box" type="checkbox">
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div>
                            <h2>Local Storage Overrides</h2>
                            <p class="experiment-subtext">Refresh the page for changes to take effect</p>
                            <button class="refresh-button" style="opacity: 0; pointer-events: none;">Save</button>
                            <input type="text" class="dev-local-storage-input-1" id="keyInput" placeholder="Enter key">
                            <input type="text" class="dev-local-storage-input-1" id="valueInput" placeholder="Enter value">
                            <button class="refresh-button" onclick="saveToLocalStorage()">Save</button>
                            <div id="storageItems"></div>
                        </div>
                        <hr>
                        <div>
                            <details>
                                <summary>endpoints</summary>

                                <p>api: ${api}</p>
                                <p>private api: ${prvapi}</p>
                                <p>api designed url: ${apidesignedurl}</p>
    
                                <p>collectibles: ${COLLECTIBLES}</p>
                                <p>published categories: ${COLLECTIBLES_IN_SHOP}</p>
                                <p>consumables: ${CONSUMABLES}</p>
                                <p>miscellaneous: ${MISCELLANEOUS}</p>
                                <p>profiles plus: ${PROFILES_PLUS}</p>
                                <p>home page preview: ${HOME_PAGE_PREVIEW}</p>
                                <p>profiles plus home page preview: ${HOME_PAGE_P_PLUS}</p>
                                <p>profile effects: ${PROFILE_EFFECTS}</p>
                                <p>downloadable data: ${DOWNLOADABLE_DATA}</p>
                                <p>profiles plus effects: ${PROFILES_PLUS_EFFECTS}</p>
                                <p>leaks: ${LEAKS}</p>
                                <p>collectibles marketing: ${COLLECTIBLES_MARKETING}</p>
                                <p>collectibles variants: ${COLLECTIBLES_VARIANTS}</p>
                                <p>experiment rollouts: ${EXPERIMENT_ROLLOUTS}</p>
                            </details>

                            <p>App Version: ${tcbx926n29}</p>
                        </div>
                        <hr>
                        <button class="refresh-button" onclick="closeDevModal()">Close</button>
                        <button class="refresh-button" onclick="turnOffDevMode()">Safe Mode</button>
                    </div>
                </div>
            </div>
            `;


            colorButtonsPerRollout()
            fetchExperimentRolloutData()


            if (localStorage.dismissible_paper_beach_v2_marketing == "dismissed") {
                document.getElementById("dismissible_paper_beach_v2_marketing-box").checked = true;
            }

            if (localStorage.dismissible_recap_2024 == "dismissed") {
                document.getElementById("dismissible_recap_2024-box").checked = true;
            }
    
        
        
            // if (localStorage.top_selling_item != "true") {
            //     if (localStorage.top_selling_item != "false") {
            //         if (localStorage.top_selling_item != "two") {
            //             document.getElementById("2024-11_top_selling_item_tag-2").classList.remove('refresh-button-selected');
            //             document.getElementById("2024-11_top_selling_item_tag-1").classList.remove('refresh-button-selected');
            //             document.getElementById("2024-11_top_selling_item_tag-0").classList.add('refresh-button-selected');
            //             document.getElementById("2024-11_top_selling_item_tag-00").classList.remove('refresh-button-selected');
            //         }
            //     }
            // }
        
            // if (localStorage.top_selling_item == "two") {
            //     document.getElementById("2024-11_top_selling_item_tag-2").classList.add('refresh-button-selected');
            //     document.getElementById("2024-11_top_selling_item_tag-1").classList.remove('refresh-button-selected');
            //     document.getElementById("2024-11_top_selling_item_tag-0").classList.remove('refresh-button-selected');
            //     document.getElementById("2024-11_top_selling_item_tag-00").classList.remove('refresh-button-selected');
            // }
            
            // if (localStorage.top_selling_item == "true") {
            //     document.getElementById("2024-11_top_selling_item_tag-2").classList.remove('refresh-button-selected');
            //     document.getElementById("2024-11_top_selling_item_tag-1").classList.add('refresh-button-selected');
            //     document.getElementById("2024-11_top_selling_item_tag-0").classList.remove('refresh-button-selected');
            //     document.getElementById("2024-11_top_selling_item_tag-00").classList.remove('refresh-button-selected');
            // }
        
            // if (localStorage.top_selling_item == "false") {
            //     document.getElementById("2024-11_top_selling_item_tag-2").classList.remove('refresh-button-selected');
            //     document.getElementById("2024-11_top_selling_item_tag-1").classList.remove('refresh-button-selected');
            //     document.getElementById("2024-11_top_selling_item_tag-0").classList.remove('refresh-button-selected');
            //     document.getElementById("2024-11_top_selling_item_tag-00").classList.add('refresh-button-selected');
            // }
        
        
        
            // if (localStorage.item_data_downloads != "true") {
            //     if (localStorage.item_data_downloads != "false") {
            //         if (localStorage.item_data_downloads != "two") {
            //             document.getElementById("2024-11_item_data_downloads-2").classList.remove('refresh-button-selected');
            //             document.getElementById("2024-11_item_data_downloads-1").classList.remove('refresh-button-selected');
            //             document.getElementById("2024-11_item_data_downloads-0").classList.add('refresh-button-selected');
            //             document.getElementById("2024-11_item_data_downloads-00").classList.remove('refresh-button-selected');
            //         }
            //     }
            // }
        
            // if (localStorage.item_data_downloads == "two") {
            //     document.getElementById("2024-11_item_data_downloads-2").classList.add('refresh-button-selected');
            //     document.getElementById("2024-11_item_data_downloads-1").classList.remove('refresh-button-selected');
            //     document.getElementById("2024-11_item_data_downloads-0").classList.remove('refresh-button-selected');
            //     document.getElementById("2024-11_item_data_downloads-00").classList.remove('refresh-button-selected');
            // }
            
            // if (localStorage.item_data_downloads == "true") {
            //     document.getElementById("2024-11_item_data_downloads-2").classList.remove('refresh-button-selected');
            //     document.getElementById("2024-11_item_data_downloads-1").classList.add('refresh-button-selected');
            //     document.getElementById("2024-11_item_data_downloads-0").classList.remove('refresh-button-selected');
            //     document.getElementById("2024-11_item_data_downloads-00").classList.remove('refresh-button-selected');
            // }
            
            // if (localStorage.item_data_downloads == "false") {
            //     document.getElementById("2024-11_item_data_downloads-2").classList.remove('refresh-button-selected');
            //     document.getElementById("2024-11_item_data_downloads-1").classList.remove('refresh-button-selected');
            //     document.getElementById("2024-11_item_data_downloads-0").classList.remove('refresh-button-selected');
            //     document.getElementById("2024-11_item_data_downloads-00").classList.add('refresh-button-selected');
            // }
        
        

            if (localStorage.force_all_api_to_fectch_private_api == "true") {
                document.getElementById("2024-12_force_all_api_to_fectch_private_api-1").classList.add('refresh-button-selected');
                document.getElementById("2024-12_force_all_api_to_fectch_private_api-2").classList.remove('refresh-button-selected');
            }
            
            if (localStorage.force_all_api_to_fectch_private_api != "true") {
                document.getElementById("2024-12_force_all_api_to_fectch_private_api-1").classList.remove('refresh-button-selected');
                document.getElementById("2024-12_force_all_api_to_fectch_private_api-2").classList.add('refresh-button-selected');
            }



            if (localStorage.override_leaks_button == "true") {
                document.getElementById("2024-11_override_leaks_button-1").classList.add('refresh-button-selected');
                document.getElementById("2024-11_override_leaks_button-2").classList.remove('refresh-button-selected');
            }
            
            if (localStorage.override_leaks_button != "true") {
                document.getElementById("2024-11_override_leaks_button-1").classList.remove('refresh-button-selected');
                document.getElementById("2024-11_override_leaks_button-2").classList.add('refresh-button-selected');
            }



            if (localStorage.unreleased_discord_collectibles == "true") {
                document.getElementById("2024-11_unreleased_discord_collectibles-1").classList.add('refresh-button-selected');
                document.getElementById("2024-11_unreleased_discord_collectibles-2").classList.remove('refresh-button-selected');
            }
            
            if (localStorage.unreleased_discord_collectibles != "true") {
                document.getElementById("2024-11_unreleased_discord_collectibles-1").classList.remove('refresh-button-selected');
                document.getElementById("2024-11_unreleased_discord_collectibles-2").classList.add('refresh-button-selected');
            }
            
            
            if (localStorage.unreleased_profiles_plus == "true") {
                document.getElementById("2024-09_profiles_plus-1").classList.add('refresh-button-selected');
            }
            
            if (localStorage.unreleased_profiles_plus != "true") {
                document.getElementById("2024-09_profiles_plus-1").classList.remove('refresh-button-selected');
                document.getElementById("2024-09_profiles_plus-2").classList.add('refresh-button-selected');
            }
        
            displayLocalStorage();
        }else {
            console.error('403 (Forbidden)')
        }
    }

    function colorButtonsPerRollout() {

        if (localStorage.profiles_plus_marketing_variants == "variant_1" || localStorage.profiles_plus_marketing_variants == "variant_1_autorollout") {
            document.getElementById("2024-12_profiles_plus_marketing_variants-1").classList.add('refresh-button-selected');
        }
    
        if (localStorage.profiles_plus_marketing_variants == "false" || localStorage.profiles_plus_marketing_variants == "false_autorollout") {
            document.getElementById("2024-12_profiles_plus_marketing_variants-00").classList.add('refresh-button-selected');
        }



        if (localStorage.collectibles_variants == "true" || localStorage.collectibles_variants == "true_autorollout") {
            document.getElementById("2024-11_collectibles_variants-1").classList.add('refresh-button-selected');
        }
    
        if (localStorage.collectibles_variants == "false" || localStorage.collectibles_variants == "false_autorollout") {
            document.getElementById("2024-11_collectibles_variants-00").classList.add('refresh-button-selected');
        }




        if (localStorage.recap_items_2024 == "true" || localStorage.recap_items_2024 == "true_autorollout") {
            document.getElementById("2024-11_recap-1").classList.add('refresh-button-selected');
        }
    
        if (localStorage.recap_items_2024 == "false" || localStorage.recap_items_2024 == "false_autorollout") {
            document.getElementById("2024-11_recap-00").classList.add('refresh-button-selected');
        }
    }


    
    
    function closeDevModal() {
        const dev_modal = document.getElementById('modal-housing');
        dev_modal.innerHTML = ``;
    }
    
    function closeMobileModal() {
        const mobile_modal = document.getElementById('modal-housing');
        mobile_modal.innerHTML = ``;
    }
    
    function closeLostModal() {
        const lost_modal = document.getElementById('modal-housing');
        lost_modal.innerHTML = ``;
    }
    
    
    
    
    const fourohfour = document.getElementById("404-mains-button");
    if (fourohfour) {  // Check if element exists
        if (localStorage.not_found_found == "true") {
            document.getElementById("404-mains-button").classList.remove('hidden');
        }
    }
    
    
    function turnOffDevMode() {
        localStorage.dev = "false"
        location.reload();
    }
    
    function dev() {
        localStorage.dev = "true"
        location.reload();
    }


    function dismissibleContent_PaperBeachV2MarketingChecked() {
        const profiles_plus_tab = document.getElementById("pplus-tab");
        if (localStorage.dismissible_paper_beach_v2_marketing != "dismissed") {
            localStorage.dismissible_paper_beach_v2_marketing = "dismissed"

            if (profiles_plus_tab) {
                if (localStorage.profiles_plus_marketing_variants === "variant_1" || localStorage.profiles_plus_marketing_variants === "variant_1_autorollout") {
                    document.getElementById("pplus-tab").innerHTML = `
                        <p class="dm-button-text">Profiles Plus</p>
                    `;
                }
            }
        } else {
            localStorage.dismissible_paper_beach_v2_marketing = ''
            if (profiles_plus_tab) {
                if (localStorage.profiles_plus_marketing_variants === "variant_1" || localStorage.profiles_plus_marketing_variants === "variant_1_autorollout") {
                    profiles_plus_tab.innerHTML = `
                        <p class="dm-button-text">Profiles Plus</p>
                        <div class="dm-new-icon">
                            NEW
                        </div>
                        <img class="paper-beach-v2-greeting-catgirl-1" src="https://cdn.yapper.shop/assets/null.png">
                        <div class="dm-tab-preview-avatar-decoration-rotate">
                            <div class="dm-tab-preview-avatar-decoration-container" id="dm-tab-preview-avatar-decoration-container">
                                <img class="dm-tab-preview-avatar-decoration-3" id="dm-tab-preview-avatar-decoration" src="https://cdn.yapper.shop/custom-collectibles/paper-beach/avatar-decorations/2.png">
                            </div>
                            <div class="dm-tab-preview-avatar-decoration-back"></div>
                        </div>
                        <p class="dm-button-text dm-button-text-marketing-1">Paper Beach Styles</p>
                    `;
                    profiles_plus_tab.classList.add('paper_beach_v2_marketing_tab');
                }
    
                profiles_plus_tab.addEventListener("mouseenter", () => {
                    if (document.getElementById("dm-tab-preview-avatar-decoration").src == "https://cdn.yapper.shop/custom-collectibles/paper-beach/avatar-decorations/12.png") {
                        document.getElementById("dm-tab-preview-avatar-decoration-container").innerHTML = `
                            <img class="dm-tab-preview-avatar-decoration-3" id="dm-tab-preview-avatar-decoration" src="https://cdn.yapper.shop/custom-collectibles/paper-beach/avatar-decorations/8.png">
                        `;
                    } else if (document.getElementById("dm-tab-preview-avatar-decoration").src == "https://cdn.yapper.shop/custom-collectibles/paper-beach/avatar-decorations/8.png") {
                        document.getElementById("dm-tab-preview-avatar-decoration-container").innerHTML = `
                            <img class="dm-tab-preview-avatar-decoration-3" id="dm-tab-preview-avatar-decoration" src="https://cdn.yapper.shop/custom-collectibles/paper-beach/avatar-decorations/2.png">
                        `;
                    } else if (document.getElementById("dm-tab-preview-avatar-decoration").src == "https://cdn.yapper.shop/custom-collectibles/paper-beach/avatar-decorations/2.png") {
                        document.getElementById("dm-tab-preview-avatar-decoration-container").innerHTML = `
                            <img class="dm-tab-preview-avatar-decoration-3" id="dm-tab-preview-avatar-decoration" src="https://cdn.yapper.shop/custom-collectibles/paper-beach/avatar-decorations/12.png">
                        `;
                    }
                });
            }
        }
    }

    if (localStorage.dismissible_paper_beach_v2_marketing != "dismissed") {
        const profiles_plus_tab = document.getElementById("pplus-tab");
        if (profiles_plus_tab) {
            if (localStorage.profiles_plus_marketing_variants === "variant_1" || localStorage.profiles_plus_marketing_variants === "variant_1_autorollout") {
                profiles_plus_tab.innerHTML = `
                    <img class="paper-beach-v2-greeting-catgirl-1" src="https://cdn.yapper.shop/assets/null.png">
                    <p class="dm-button-text">Profiles Plus</p>
                    <div class="dm-new-icon">
                        NEW
                    </div>
                    <div class="dm-tab-preview-avatar-decoration-rotate">
                        <div class="dm-tab-preview-avatar-decoration-container" id="dm-tab-preview-avatar-decoration-container">
                            <img class="dm-tab-preview-avatar-decoration-3" id="dm-tab-preview-avatar-decoration" src="https://cdn.yapper.shop/custom-collectibles/paper-beach/avatar-decorations/2.png">
                        </div>
                        <div class="dm-tab-preview-avatar-decoration-back"></div>
                    </div>
                    <p class="dm-button-text dm-button-text-marketing-1">Paper Beach Styles</p>
                `;
                profiles_plus_tab.classList.add('paper_beach_v2_marketing_tab');
            }

            profiles_plus_tab.addEventListener("mouseenter", () => {
                if (document.getElementById("dm-tab-preview-avatar-decoration").src == "https://cdn.yapper.shop/custom-collectibles/paper-beach/avatar-decorations/12.png") {
                    document.getElementById("dm-tab-preview-avatar-decoration-container").innerHTML = `
                        <img class="dm-tab-preview-avatar-decoration-3" id="dm-tab-preview-avatar-decoration" src="https://cdn.yapper.shop/custom-collectibles/paper-beach/avatar-decorations/8.png">
                    `;
                } else if (document.getElementById("dm-tab-preview-avatar-decoration").src == "https://cdn.yapper.shop/custom-collectibles/paper-beach/avatar-decorations/8.png") {
                    document.getElementById("dm-tab-preview-avatar-decoration-container").innerHTML = `
                        <img class="dm-tab-preview-avatar-decoration-3" id="dm-tab-preview-avatar-decoration" src="https://cdn.yapper.shop/custom-collectibles/paper-beach/avatar-decorations/2.png">
                    `;
                } else if (document.getElementById("dm-tab-preview-avatar-decoration").src == "https://cdn.yapper.shop/custom-collectibles/paper-beach/avatar-decorations/2.png") {
                    document.getElementById("dm-tab-preview-avatar-decoration-container").innerHTML = `
                        <img class="dm-tab-preview-avatar-decoration-3" id="dm-tab-preview-avatar-decoration" src="https://cdn.yapper.shop/custom-collectibles/paper-beach/avatar-decorations/12.png">
                    `;
                }
            });
        }
    }


    function dismissibleContent_Recap2024Checked() {
        const home_page_dismissible_content_container = document.getElementById("home-page-dismissible-content-container");
        if (localStorage.dismissible_recap_2024 != "dismissed") {
            localStorage.dismissible_recap_2024 = "dismissed"

            if (home_page_dismissible_content_container) {
                if (localStorage.recap_items_2024 === "true" || localStorage.recap_items_2024 === "true_autorollout") {
                    document.getElementById("home-page-dismissible-content-container").innerHTML = ``;
                }
            }
        }
        else {
            localStorage.dismissible_recap_2024 = ''
            if (home_page_dismissible_content_container) {
                if (localStorage.recap_items_2024 === "true" || localStorage.recap_items_2024 === "true_autorollout") {
                    document.getElementById("home-page-dismissible-content-container").innerHTML = `
                        <img class="home-page-dismissible-content-2024-recap" onclick="dismissibleContentRecap2024()" src="${cdn}${DISMISSIBLE_2024_RECAP}" title="Check out everything 2024 had to offer!">
                    `;
                }
            }
        }
    }





    function profilesPlusMarketingVariants1() {
        localStorage.profiles_plus_marketing_variants = "variant_1"
        document.getElementById("2024-12_profiles_plus_marketing_variants-1").classList.add('refresh-button-selected');
        document.getElementById("2024-12_profiles_plus_marketing_variants-00").classList.remove('refresh-button-selected');
    }

    function profilesPlusMarketingVariants00() {
        localStorage.profiles_plus_marketing_variants = "false"
        document.getElementById("2024-12_profiles_plus_marketing_variants-1").classList.remove('refresh-button-selected');
        document.getElementById("2024-12_profiles_plus_marketing_variants-00").classList.add('refresh-button-selected');
    }

    function profilesPlusMarketingVariants0() {
        localStorage.profiles_plus_marketing_variants = "pleasesetautorollout"
        document.getElementById("2024-12_profiles_plus_marketing_variants-1").classList.remove('refresh-button-selected');
        document.getElementById("2024-12_profiles_plus_marketing_variants-00").classList.remove('refresh-button-selected');
        fetchExperimentRolloutData();
    }


    function collectiblesVariants1() {
        localStorage.collectibles_variants = "true"
        document.getElementById("2024-11_collectibles_variants-1").classList.add('refresh-button-selected');
        document.getElementById("2024-11_collectibles_variants-00").classList.remove('refresh-button-selected');
    }

    function collectiblesVariants00() {
        localStorage.collectibles_variants = "false"
        document.getElementById("2024-11_collectibles_variants-1").classList.remove('refresh-button-selected');
        document.getElementById("2024-11_collectibles_variants-00").classList.add('refresh-button-selected');
    }

    function collectiblesVariants0() {
        localStorage.collectibles_variants = "pleasesetautorollout"
        document.getElementById("2024-11_collectibles_variants-1").classList.remove('refresh-button-selected');
        document.getElementById("2024-11_collectibles_variants-00").classList.remove('refresh-button-selected');
        fetchExperimentRolloutData();
    }



    function recap2024Items1() {
        localStorage.recap_items_2024 = "true"
        document.getElementById("2024-11_recap-1").classList.add('refresh-button-selected');
        document.getElementById("2024-11_recap-00").classList.remove('refresh-button-selected');
    }

    function recap2024Items00() {
        localStorage.recap_items_2024 = "false"
        document.getElementById("2024-11_recap-1").classList.remove('refresh-button-selected');
        document.getElementById("2024-11_recap-00").classList.add('refresh-button-selected');
    }

    function recap2024Items0() {
        localStorage.recap_items_2024 = "pleasesetautorollout"
        document.getElementById("2024-11_recap-1").classList.remove('refresh-button-selected');
        document.getElementById("2024-11_recap-00").classList.remove('refresh-button-selected');
        fetchExperimentRolloutData();
    }




    function forceAllApiToFectchPrivateApiFalse() {
        localStorage.force_all_api_to_fectch_private_api = "none"
        document.getElementById("2024-12_force_all_api_to_fectch_private_api-1").classList.remove('refresh-button-selected');
        document.getElementById("2024-12_force_all_api_to_fectch_private_api-2").classList.add('refresh-button-selected');
        fetchData(pageCheck());
    }
    
    function forceAllApiToFectchPrivateApiTrue() {
        localStorage.force_all_api_to_fectch_private_api = "true"
        document.getElementById("2024-12_force_all_api_to_fectch_private_api-1").classList.add('refresh-button-selected');
        document.getElementById("2024-12_force_all_api_to_fectch_private_api-2").classList.remove('refresh-button-selected');
        fetchData(pageCheck());
    }


    

    function overrideLeaksButtonHide() {
        localStorage.override_leaks_button = "none"
        document.getElementById("2024-11_override_leaks_button-1").classList.remove('refresh-button-selected');
        document.getElementById("2024-11_override_leaks_button-2").classList.add('refresh-button-selected');
        leaksCheck();
    }
    
    function overrideLeaksButtonShow() {
        localStorage.override_leaks_button = "true"
        document.getElementById("2024-11_override_leaks_button-1").classList.add('refresh-button-selected');
        document.getElementById("2024-11_override_leaks_button-2").classList.remove('refresh-button-selected');
        leaksCheck();
    }

    

    function unreleasedDiscordCollectiblesFalse() {
        localStorage.unreleased_discord_collectibles = "none"
        document.getElementById("2024-11_unreleased_discord_collectibles-1").classList.remove('refresh-button-selected');
        document.getElementById("2024-11_unreleased_discord_collectibles-2").classList.add('refresh-button-selected');
        fetchData(pageCheck());
    }
    
    function unreleasedDiscordCollectiblesTrue() {
        localStorage.unreleased_discord_collectibles = "true"
        document.getElementById("2024-11_unreleased_discord_collectibles-1").classList.add('refresh-button-selected');
        document.getElementById("2024-11_unreleased_discord_collectibles-2").classList.remove('refresh-button-selected');
        fetchData(pageCheck());
    }

    
    
    
    function unreleasedProfilesPlusItemsFalse() {
        localStorage.unreleased_profiles_plus = "none"
        document.getElementById("2024-09_profiles_plus-1").classList.remove('refresh-button-selected');
        document.getElementById("2024-09_profiles_plus-2").classList.add('refresh-button-selected');
        fetchData(pageCheck());
    }
    
    function unreleasedProfilesPlusItemsTrue() {
        localStorage.unreleased_profiles_plus = "true"
        document.getElementById("2024-09_profiles_plus-1").classList.add('refresh-button-selected');
        document.getElementById("2024-09_profiles_plus-2").classList.remove('refresh-button-selected');
        fetchData(pageCheck());
    }
    
    
    
    
    function saveToLocalStorage() {
        // Get the values from the inputs
        const key = document.getElementById('keyInput').value;
        const value = document.getElementById('valueInput').value;
        
        // Save to local storage
        localStorage.setItem(key, value);
        
        // Refresh the display
        displayLocalStorage();
    }
        
    function displayLocalStorage() {
        // Get the container element
        const storageItems = document.getElementById('storageItems');
        
        // Clear the container
        storageItems.innerHTML = '';
        
        // Iterate over all items in local storage
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            
            // Create a container for each item
            const itemDiv = document.createElement('div');
            
            // Create editable input fields for key and value
            const keyInput = document.createElement('input');
            keyInput.type = 'text';
            keyInput.value = key;
            keyInput.disabled = true; // Disable key editing
            keyInput.className = 'dev-local-storage-input-2';
            
            const valueInput = document.createElement('input');
            valueInput.type = 'text';
            valueInput.value = value;
            valueInput.className = 'dev-local-storage-input-3';
            
            // Save button for each item
            const saveButton = document.createElement('button');
            saveButton.textContent = 'Update';
            saveButton.className = 'refresh-button';
            saveButton.onclick = function() {
                localStorage.setItem(key, valueInput.value);
            };
            
            // Delete button for each item
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'refresh-button';
            deleteButton.onclick = function() {
                localStorage.removeItem(key);
                displayLocalStorage(); // Refresh the display
            };
            
            // Append elements to the item div
            itemDiv.appendChild(deleteButton);
            itemDiv.appendChild(keyInput);
            itemDiv.appendChild(valueInput);
            itemDiv.appendChild(saveButton);
            
            // Append the item div to the container
            storageItems.appendChild(itemDiv);
        }
    }

    function fetchExperimentRolloutData() {
        fetch(api + EXPERIMENT_ROLLOUTS)
        .then(response => response.json())
        .then((data) => {
            data.forEach(experiments => {
    
                if (experiments.id === 7) {
                    if (experiments.rolled_out_treatment === 1) {
                        console.log(`exp 7:1`);
                        if (localStorage.recap_items_2024 != "false" && localStorage.recap_items_2024 != "true") {
                            localStorage.recap_items_2024 = "true_autorollout"
                        }
                        try {
                            document.getElementById('experiment-default-rollout-data-2024-11_recap').innerHTML = `
                                <p class="experiment-subtext">default rollout: Override 1</p>
                            `;
                        } catch (error) {
                        }
                    } else if (experiments.rolled_out_treatment === -1) {
                        console.log(`exp 7:-1`);
                        if (localStorage.recap_items_2024 != "false" && localStorage.recap_items_2024 != "true") {
                            localStorage.recap_items_2024 = "false_autorollout"
                        }
                        try {
                            document.getElementById('experiment-default-rollout-data-2024-11_recap').innerHTML = `
                                <p class="experiment-subtext">default rollout: Override -1</p>
                            `;
                        } catch (error) {
                        }
                    } else {
                        console.warn(`exp 7:?`);
                        console.error(`Failed to load treatment for experiment 7`);
                    }
                }

                if (experiments.id === 8) {
                    if (experiments.rolled_out_treatment === 1) {
                        console.log(`exp 8:1`);
                        if (localStorage.collectibles_variants != "false" && localStorage.collectibles_variants != "true") {
                            localStorage.collectibles_variants = "true_autorollout"
                        }
                        try {
                            document.getElementById('experiment-default-rollout-data-2024-11_collectibles_variants').innerHTML = `
                                <p class="experiment-subtext">default rollout: Override 1</p>
                            `;
                        } catch (error) {
                        }
                    } else if (experiments.rolled_out_treatment === -1) {
                        console.log(`exp 8:-1`);
                        if (localStorage.collectibles_variants != "false" && localStorage.collectibles_variants != "true") {
                            localStorage.collectibles_variants = "false_autorollout"
                        }
                        try {
                            document.getElementById('experiment-default-rollout-data-2024-11_collectibles_variants').innerHTML = `
                                <p class="experiment-subtext">default rollout: Override -1</p>
                            `;
                        } catch (error) {
                        }
                    } else {
                        console.warn(`exp 8:?`);
                        console.error(`Failed to load treatment for experiment 8`);
                    }
                }

                if (experiments.id === 9) {
                    if (experiments.rolled_out_treatment === 1) {
                        console.log(`exp 9:1`);
                        if (localStorage.profiles_plus_marketing_variants != "false" && localStorage.profiles_plus_marketing_variants != "variant_1") {
                            localStorage.profiles_plus_marketing_variants = "variant_1_autorollout"
                        }
                        try {
                            document.getElementById('experiment-default-rollout-data-2024-12_profiles_plus_marketing_variants').innerHTML = `
                                <p class="experiment-subtext">default rollout: Override 1</p>
                            `;
                        } catch (error) {
                        }
                    } else if (experiments.rolled_out_treatment === -1) {
                        console.log(`exp 9:-1`);
                        if (localStorage.profiles_plus_marketing_variants != "false" && localStorage.profiles_plus_marketing_variants != "variant_1") {
                            localStorage.profiles_plus_marketing_variants = "false_autorollout"
                        }
                        try {
                            document.getElementById('experiment-default-rollout-data-2024-12_profiles_plus_marketing_variants').innerHTML = `
                                <p class="experiment-subtext">default rollout: Override -1</p>
                            `;
                        } catch (error) {
                        }
                    } else {
                        console.warn(`exp 9:?`);
                        console.error(`Failed to load treatment for experiment 9`);
                    }
                }
    
            });
            try {
                colorButtonsPerRollout()
            } catch (error) {
            }
        })
        .catch(error => {
            console.error(error)
        });
    }
    fetchExperimentRolloutData();
}