---
layout: default
title: Home
---

<div class="cards">
    {% assign baseurl = site.baseurl %}
    {% for project in site.pages %}
    {% if project.layout == "project" %}
    <div class="card">
        {% include_relative _layouts/projectcard.html project=project baseurl=baseurl %}
    </div>
    {% endif %}
    {% endfor %}
</div>