<template>
  <div v-bind:value="value" v-on:change="$emit('change', getExpression)">
    <Tabs type="card">
      <TabPane label="秒">
        <RadioGroup v-model="corn.second.label" style="margin-left: 5px;" vertical>
          <Radio label="1">
            <Icon type=""></Icon>
            <span>每一秒</span>
          </Radio>
          <Radio label="2">
            <Icon type=""></Icon>
            <span style="">从第
            <Input v-model="corn.second.rangeStart" class="item" type="number" size="small" number></Input>秒到第<Input
                v-model="corn.second.rangeEnd" class="item" type="number"
                size="small"
                number></Input>秒的每一秒</span>
          </Radio>
          <Radio label="3">
            <Icon type=""></Icon>
            <span style="">从第
            <Input v-model="corn.second.intervalStart" class="item" type="number" size="small"
                   number></Input>秒开始，每<Input v-model="corn.second.interval" class="item" type="number"
                                              size="small"
                                              number></Input>秒</span>
          </Radio>
          <Radio label="4">
            <Icon type=""></Icon>
            <span style="">指定</span>
          </Radio>
          <template v-if="corn.second.label === '4'">
            <div class="resetButton">
              <Button type="text" size="small" @click="handleReset(corn.second.checked)">重置</Button>
            </div>
            <CheckboxGroup v-model="corn.second.checked">
              <Checkbox label="0">00</Checkbox>
              <Checkbox label="1">01</Checkbox>
              <Checkbox label="2">02</Checkbox>
              <Checkbox label="3">03</Checkbox>
              <Checkbox label="4">04</Checkbox>
              <Checkbox label="5">05</Checkbox>
              <Checkbox label="6">06</Checkbox>
              <Checkbox label="7">07</Checkbox>
              <Checkbox label="8">08</Checkbox>
              <Checkbox label="9">09</Checkbox>
              <br/>
              <Checkbox label="10">10</Checkbox>
              <Checkbox label="11">11</Checkbox>
              <Checkbox label="12">12</Checkbox>
              <Checkbox label="13">13</Checkbox>
              <Checkbox label="14">14</Checkbox>
              <Checkbox label="15">15</Checkbox>
              <Checkbox label="16">16</Checkbox>
              <Checkbox label="17">17</Checkbox>
              <Checkbox label="18">18</Checkbox>
              <Checkbox label="19">19</Checkbox>
              <br/>
              <Checkbox label="20">20</Checkbox>
              <Checkbox label="21">21</Checkbox>
              <Checkbox label="22">22</Checkbox>
              <Checkbox label="23">23</Checkbox>
              <Checkbox label="24">24</Checkbox>
              <Checkbox label="25">25</Checkbox>
              <Checkbox label="26">26</Checkbox>
              <Checkbox label="27">27</Checkbox>
              <Checkbox label="28">28</Checkbox>
              <Checkbox label="29">29</Checkbox>
              <br/>
              <Checkbox label="30">30</Checkbox>
              <Checkbox label="31">31</Checkbox>
              <Checkbox label="32">32</Checkbox>
              <Checkbox label="33">33</Checkbox>
              <Checkbox label="34">34</Checkbox>
              <Checkbox label="35">35</Checkbox>
              <Checkbox label="36">36</Checkbox>
              <Checkbox label="37">37</Checkbox>
              <Checkbox label="38">38</Checkbox>
              <Checkbox label="39">39</Checkbox>
              <br/>
              <Checkbox label="40">40</Checkbox>
              <Checkbox label="41">41</Checkbox>
              <Checkbox label="42">42</Checkbox>
              <Checkbox label="43">43</Checkbox>
              <Checkbox label="44">44</Checkbox>
              <Checkbox label="45">45</Checkbox>
              <Checkbox label="46">46</Checkbox>
              <Checkbox label="47">47</Checkbox>
              <Checkbox label="48">48</Checkbox>
              <Checkbox label="49">49</Checkbox>
              <br/>
              <Checkbox label="50">50</Checkbox>
              <Checkbox label="51">51</Checkbox>
              <Checkbox label="52">52</Checkbox>
              <Checkbox label="53">53</Checkbox>
              <Checkbox label="54">54</Checkbox>
              <Checkbox label="55">55</Checkbox>
              <Checkbox label="56">56</Checkbox>
              <Checkbox label="57">57</Checkbox>
              <Checkbox label="58">58</Checkbox>
              <Checkbox label="59">59</Checkbox>
            </CheckboxGroup>
          </template>
        </RadioGroup>
      </TabPane>
      <TabPane label="分">
        <RadioGroup style="margin-left: 5px;" vertical v-model="corn.minute.label">
          <Radio label="1">
            <Icon type=""></Icon>
            <span>每一分钟</span>
          </Radio>
          <Radio label="2">
            <Icon type=""></Icon>
            <span style="">从第
            <Input v-model="corn.minute.rangeStart" class="item" type="number" size="small" number></Input>分钟到第<Input
                v-model="corn.minute.rangeEnd" class="item" type="number"
                size="small"
                number></Input>分钟的每一分钟</span>
          </Radio>
          <Radio label="3">
            <Icon type=""></Icon>
            <span style="">从第
            <Input v-model="corn.minute.intervalStart" class="item" type="number" size="small"
                   number></Input>分钟开始，每<Input v-model="corn.minute.interval" class="item" type="number"
                                               size="small"
                                               number></Input>分钟</span>
          </Radio>
          <Radio label="4">
            <Icon type=""></Icon>
            <span style="">指定</span>
          </Radio>
          <template v-if="corn.minute.label === '4'">
            <div class="resetButton">
              <Button type="text" size="small" @click="handleReset(corn.minute.checked)">重置</Button>
            </div>
            <CheckboxGroup v-model="corn.minute.checked">
              <Checkbox label="0">00</Checkbox>
              <Checkbox label="1">01</Checkbox>
              <Checkbox label="2">02</Checkbox>
              <Checkbox label="3">03</Checkbox>
              <Checkbox label="4">04</Checkbox>
              <Checkbox label="5">05</Checkbox>
              <Checkbox label="6">06</Checkbox>
              <Checkbox label="7">07</Checkbox>
              <Checkbox label="8">08</Checkbox>
              <Checkbox label="9">09</Checkbox>
              <br/>
              <Checkbox label="10">10</Checkbox>
              <Checkbox label="11">11</Checkbox>
              <Checkbox label="12">12</Checkbox>
              <Checkbox label="13">13</Checkbox>
              <Checkbox label="14">14</Checkbox>
              <Checkbox label="15">15</Checkbox>
              <Checkbox label="16">16</Checkbox>
              <Checkbox label="17">17</Checkbox>
              <Checkbox label="18">18</Checkbox>
              <Checkbox label="19">19</Checkbox>
              <br/>
              <Checkbox label="20">20</Checkbox>
              <Checkbox label="21">21</Checkbox>
              <Checkbox label="22">22</Checkbox>
              <Checkbox label="23">23</Checkbox>
              <Checkbox label="24">24</Checkbox>
              <Checkbox label="25">25</Checkbox>
              <Checkbox label="26">26</Checkbox>
              <Checkbox label="27">27</Checkbox>
              <Checkbox label="28">28</Checkbox>
              <Checkbox label="29">29</Checkbox>
              <br/>
              <Checkbox label="30">30</Checkbox>
              <Checkbox label="31">31</Checkbox>
              <Checkbox label="32">32</Checkbox>
              <Checkbox label="33">33</Checkbox>
              <Checkbox label="34">34</Checkbox>
              <Checkbox label="35">35</Checkbox>
              <Checkbox label="36">36</Checkbox>
              <Checkbox label="37">37</Checkbox>
              <Checkbox label="38">38</Checkbox>
              <Checkbox label="39">39</Checkbox>
              <br/>
              <Checkbox label="40">40</Checkbox>
              <Checkbox label="41">41</Checkbox>
              <Checkbox label="42">42</Checkbox>
              <Checkbox label="43">43</Checkbox>
              <Checkbox label="44">44</Checkbox>
              <Checkbox label="45">45</Checkbox>
              <Checkbox label="46">46</Checkbox>
              <Checkbox label="47">47</Checkbox>
              <Checkbox label="48">48</Checkbox>
              <Checkbox label="49">49</Checkbox>
              <br/>
              <Checkbox label="50">50</Checkbox>
              <Checkbox label="51">51</Checkbox>
              <Checkbox label="52">52</Checkbox>
              <Checkbox label="53">53</Checkbox>
              <Checkbox label="54">54</Checkbox>
              <Checkbox label="55">55</Checkbox>
              <Checkbox label="56">56</Checkbox>
              <Checkbox label="57">57</Checkbox>
              <Checkbox label="58">58</Checkbox>
              <Checkbox label="59">59</Checkbox>
            </CheckboxGroup>
          </template>
        </RadioGroup>
      </TabPane>
      <TabPane label="时">
        <RadioGroup v-model="corn.hour.label" style="margin-left: 5px;" vertical>
          <Radio label="1">
            <Icon type=""></Icon>
            <span>每一小时</span>
          </Radio>
          <Radio label="2">
            <Icon type=""></Icon>
            <span style="">从
            <Input v-model="corn.hour.rangeStart" class="item" type="number" size="small" number></Input>点钟到<Input
                v-model="corn.hour.rangeEnd" class="item" type="number"
                size="small"
                number></Input>点钟的每小时</span>
          </Radio>
          <Radio label="3">
            <Icon type=""></Icon>
            <span style="">从
            <Input v-model="corn.hour.intervalStart" class="item" type="number" size="small" number></Input>点钟开始，每<Input
                v-model="corn.hour.interval" class="item" type="number"
                size="small"
                number></Input>小时</span>
          </Radio>
          <Radio label="4">
            <Icon type=""></Icon>
            <span style="">指定</span>
          </Radio>
          <template v-if="corn.hour.label === '4'">
            <div class="resetButton">
              <Button type="text" size="small" @click="handleReset(corn.hour.checked)">重置</Button>
            </div>
            <CheckboxGroup v-model="corn.hour.checked">
              <Checkbox label="0">00</Checkbox>
              <Checkbox label="1">01</Checkbox>
              <Checkbox label="2">02</Checkbox>
              <Checkbox label="3">03</Checkbox>
              <Checkbox label="4">04</Checkbox>
              <Checkbox label="5">05</Checkbox>
              <Checkbox label="6">06</Checkbox>
              <Checkbox label="7">07</Checkbox>
              <Checkbox label="8">08</Checkbox>
              <Checkbox label="9">09</Checkbox>
              <Checkbox label="10">10</Checkbox>
              <Checkbox label="11">11</Checkbox>
              <br/>
              <Checkbox label="12">12</Checkbox>
              <Checkbox label="13">13</Checkbox>
              <Checkbox label="14">14</Checkbox>
              <Checkbox label="15">15</Checkbox>
              <Checkbox label="16">16</Checkbox>
              <Checkbox label="17">17</Checkbox>
              <Checkbox label="18">18</Checkbox>
              <Checkbox label="19">19</Checkbox>
              <Checkbox label="20">20</Checkbox>
              <Checkbox label="21">21</Checkbox>
              <Checkbox label="22">22</Checkbox>
              <Checkbox label="23">23</Checkbox>
            </CheckboxGroup>
          </template>
        </RadioGroup>
      </TabPane>
      <TabPane label="日">
        <RadioGroup v-model="corn.dayOfMonth.label" style="margin-left: 5px;" vertical>
          <Radio label="1">
            <Icon type=""></Icon>
            <span>一个月的每一天</span>
          </Radio>
          <Radio label="2">
            <Icon type=""></Icon>
            <span>不指定</span>
          </Radio>
          <Radio label="3">
            <Icon type=""></Icon>
            <span style="">从第
            <Input v-model="corn.dayOfMonth.rangeStart" class="item" type="number" size="small" number></Input>日到第<Input
                v-model="corn.dayOfMonth.rangeEnd" class="item" type="number"
                size="small"
                number></Input>日的每一天</span>
          </Radio>
          <Radio label="4">
            <Icon type=""></Icon>
            <span style="">从第
            <Input v-model="corn.dayOfMonth.intervalStart" class="item" type="number" size="small"
                   number></Input>日开始，每<Input v-model="corn.dayOfMonth.interval" class="item" type="number"
                                              size="small"
                                              number></Input>天</span>
          </Radio>
          <Radio label="5">
            <Icon type=""></Icon>
            <span style="">每月距
            <Input v-model="corn.dayOfMonth.lastest" class="item" type="number" size="small"
                   number></Input>日最近的工作日</span>
          </Radio>
          <Radio label="6">
            <Icon type=""></Icon>
            <span style="">每月最后一天</span>
          </Radio>
          <Radio label="7">
            <Icon type=""></Icon>
            <span style="">指定</span>
          </Radio>
          <template v-if="corn.dayOfMonth.label === '7'">
            <div class="resetButton">
              <Button type="text" size="small" @click="handleReset(corn.dayOfMonth.checked)">重置</Button>
            </div>
            <CheckboxGroup v-model="corn.dayOfMonth.checked">
              <Checkbox label="1">01</Checkbox>
              <Checkbox label="2">02</Checkbox>
              <Checkbox label="3">03</Checkbox>
              <Checkbox label="4">04</Checkbox>
              <Checkbox label="5">05</Checkbox>
              <Checkbox label="6">06</Checkbox>
              <Checkbox label="7">07</Checkbox>
              <br/>
              <Checkbox label="8">08</Checkbox>
              <Checkbox label="9">09</Checkbox>
              <Checkbox label="10">10</Checkbox>
              <Checkbox label="11">11</Checkbox>
              <Checkbox label="12">12</Checkbox>
              <Checkbox label="13">13</Checkbox>
              <Checkbox label="14">14</Checkbox>
              <br/>
              <Checkbox label="15">15</Checkbox>
              <Checkbox label="16">16</Checkbox>
              <Checkbox label="17">17</Checkbox>
              <Checkbox label="18">18</Checkbox>
              <Checkbox label="19">19</Checkbox>
              <Checkbox label="20">20</Checkbox>
              <Checkbox label="21">21</Checkbox>
              <br/>
              <Checkbox label="22">22</Checkbox>
              <Checkbox label="23">23</Checkbox>
              <Checkbox label="24">24</Checkbox>
              <Checkbox label="25">25</Checkbox>
              <Checkbox label="26">26</Checkbox>
              <Checkbox label="27">27</Checkbox>
              <Checkbox label="28">28</Checkbox>
              <br/>
              <Checkbox label="29">29</Checkbox>
              <Checkbox label="30">30</Checkbox>
              <Checkbox label="31">31</Checkbox>
            </CheckboxGroup>
          </template>
        </RadioGroup>
      </TabPane>
      <TabPane label="月">
        <RadioGroup v-model="corn.month.label" style="margin-left: 5px;" vertical>
          <Radio label="1">
            <Icon type=""></Icon>
            <span>每月</span>
          </Radio>
          <Radio label="2">
            <Icon type=""></Icon>
            <span>不指定</span>
          </Radio>
          <Radio label="3">
            <Icon type=""></Icon>
            <span style="">从
            <Input v-model="corn.month.rangeStart" class="item" type="number" size="small" number></Input>月到<Input
                v-model="corn.month.rangeEnd" class="item" type="number"
                size="small"
                number></Input>月的每月</span>
          </Radio>
          <Radio label="4">
            <Icon type=""></Icon>
            <span style="">从第
            <Input v-model="corn.month.intervalStart" class="item" type="number" size="small" number></Input>月开始，每<Input
                v-model="corn.month.interval" class="item" type="number"
                size="small"
                number></Input>个月</span>
          </Radio>
          <Radio label="5">
            <Icon type=""></Icon>
            <span style="">指定</span>
          </Radio>
          <template v-if="corn.month.label === '5'">
            <div class="resetButton">
              <Button type="text" size="small" @click="handleReset(corn.month.checked)">重置</Button>
            </div>
            <CheckboxGroup v-model="corn.month.checked">
              <Checkbox label="1">一月</Checkbox>
              <Checkbox label="2">二月</Checkbox>
              <Checkbox label="3">三月</Checkbox>
              <Checkbox label="4">四月</Checkbox>
              <Checkbox label="5">五月</Checkbox>
              <Checkbox label="6">六月</Checkbox>
              <Checkbox label="7">七月</Checkbox>
              <Checkbox label="8">八月</Checkbox>
              <Checkbox label="9">九月</Checkbox>
              <Checkbox label="10">十月</Checkbox>
              <Checkbox label="11">十一月</Checkbox>
              <Checkbox label="12">十二月</Checkbox>
            </CheckboxGroup>
          </template>
        </RadioGroup>
      </TabPane>
      <TabPane label="周">
        <RadioGroup v-model="corn.dayOfWeek.label" style="margin-left: 5px; width:60%;" vertical>
          <Radio label="1" disabled>
            <Icon type=""></Icon>
            <span>一周的每一天</span>
          </Radio>
          <Radio label="2">
            <Icon type=""></Icon>
            <span>不指定</span>
          </Radio>
          <Radio label="3" disabled>
            <Icon type=""></Icon>
            <span style="">从
              <Select v-model="corn.dayOfWeek.rangeStart" class="weekItem" size="small">
                <Option v-for="dayOfWeekOption in dayOfWeekOptions" :value="dayOfWeekOption.value">{{dayOfWeekOption.label}}</Option>
              </Select>到
            <Select v-model="corn.dayOfWeek.rangeEnd" class="weekItem" size="small">
              <Option v-for="dayOfWeekOption in dayOfWeekOptions" :value="dayOfWeekOption.value">{{dayOfWeekOption.label}}</Option>
            </Select>的每一天</span>
          </Radio>
          <Radio label="4" disabled>
            <Icon type=""></Icon>
            <span style="">本月第
            <Select v-model="corn.dayOfWeek.intervalStart" class="weekItem" size="small">
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="4">4</Option>
            </Select>周的星期
              <Select v-model="corn.dayOfWeek.interval" class="weekItem" size="small">
              <Option v-for="dayOfWeekOption in dayOfWeekOptions" :value="dayOfWeekOption.value">{{dayOfWeekOption.label}}</Option>
            </Select></span>
          </Radio>

          <Radio label="5" disabled>
            <Icon type=""></Icon>
            <span style="">每月最后一个星期
              <Select v-model="corn.dayOfWeek.last" class="weekItem" size="small">
              <Option v-for="dayOfWeekOption in dayOfWeekOptions" :value="dayOfWeekOption.value">{{dayOfWeekOption.label}}</Option>
            </Select>
            </span>
          </Radio>

          <Radio label="6" disabled>
            <Icon type=""></Icon>
            <span style="">指定</span>
          </Radio>
          <template v-if="corn.dayOfWeek.label === '6'">
            <div class="resetButton">
              <Button type="text" size="small" @click="handleReset(corn.dayOfWeek.checked)">重置</Button>
            </div>
            <CheckboxGroup v-model="corn.dayOfWeek.checked">
              <Checkbox label="1">星期一</Checkbox>
              <Checkbox label="2">星期二</Checkbox>
              <Checkbox label="3">星期三</Checkbox>
              <Checkbox label="4">星期四</Checkbox>
              <Checkbox label="5">星期五</Checkbox>
              <Checkbox label="6">星期六</Checkbox>
              <Checkbox label="7">星期日</Checkbox>
            </CheckboxGroup>
          </template>
        </RadioGroup>
      </TabPane>
      <TabPane label="年">
        <RadioGroup v-model="corn.year.label" style="margin-left: 5px;" vertical>
          <Radio label="1">
            <Icon type=""></Icon>
            <span>每年</span>
          </Radio>
          <Radio label="2">
            <Icon type=""></Icon>
            <span style="">从
            <Input v-model="corn.year.rangeStart" class="item" type="number" size="small" number></Input>年到<Input
                v-model="corn.year.rangeEnd" class="item" type="number"
                size="small"
                number></Input>年的每年</span>
          </Radio>
          <Radio label="3">
            <Icon type=""></Icon>
            <span style="">从
            <Input v-model="corn.year.intervalStart" class="item" type="number" size="small" number></Input>年开始，每<Input
                v-model="corn.year.interval" class="item" type="number"
                size="small"
                number></Input>年</span>
          </Radio>
        </RadioGroup>
      </TabPane>
    </Tabs>
    <template v-show="expression">
      <span><b>Corn表达式: &nbsp;</b>{{getExpression}}</span>
    </template>
    <template v-if="example">
      <span>hh</span>
    </template>
  </div>
</template>

<script>
  export default {
    name: "CornExpression",
    model:{
      prop:'value',
      event:'change'
    },
    props: {
      expression: Boolean,
      example: Boolean,
      editable: Boolean,
      value:String
    },
    data() {
      return {
        cornExpression: this.getExpression,
        corn: {
          second: {
            label: '4',
            value: '',
            rangeStart: 0,
            rangeEnd: 0,
            intervalStart: 0,
            interval: 30,
            checked: ['0']
          },
          minute: {
            label: '4',
            value: '',
            rangeStart: 0,
            rangeEnd: 0,
            intervalStart: 0,
            interval: 30,
            checked: ['0']
          },
          hour: {
            label: '4',
            value: '',
            rangeStart: 0,
            rangeEnd: 0,
            intervalStart: 0,
            interval: 30,
            checked: ['9']
          },
          dayOfMonth: {
            label: '1',
            value: '',
            rangeStart: 0,
            rangeEnd: 0,
            intervalStart: 0,
            interval: 0,
            lastest: 0,
            checked: []
          },
          month: {
            label: '1',
            value: '',
            rangeStart: 0,
            rangeEnd: 0,
            intervalStart: 0,
            interval: 0,
            checked: []
          },
          dayOfWeek: {
            label: '2',
            value: '',
            rangeStart: 1,
            rangeEnd: 1,
            intervalStart: '1',
            interval: 1,
            last: 1,
            checked: []
          },
          year: {
            label: '1',
            value: '',
            rangeStart: 0,
            rangeEnd: 0,
            intervalStart: 0,
            interval: 0
          }
        },
        dayOfWeekOptions: [
          {
            value: 1,
            label: '星期日'
          },
          {
            value: 2,
            label: '星期一'
          },
          {
            value: 3,
            label: '星期二'
          },
          {
            value: 4,
            label: '星期三'
          },
          {
            value: 5,
            label: '星期四'
          },
          {
            value: 6,
            label: '星期五'
          },
          {
            value: 7,
            label: '星期六'
          }
        ]
      }
    },
    computed: {
      getSecondValue() {
        if (this.corn.second.label === '1') {
          this.corn.second.value = '*'
        } else if (this.corn.second.label === '2') {
          this.corn.second.value = this.corn.second.rangeStart + '-' + this.corn.second.rangeEnd
        } else if (this.corn.second.label === '3') {
          this.corn.second.value = this.corn.second.intervalStart + '/' + this.corn.second.interval
        } else {
          let value = ''
          for (var i = 0; i < this.corn.second.checked.length; i++) {
            value += this.corn.second.checked[i]
            if (i < this.corn.second.checked.length - 1) {
              value += ','
            }
          }
          this.corn.second.value = value
        }
        return this.corn.second.value
      },
      getMinuteValue() {
        if (this.corn.minute.label === '1') {
          this.corn.minute.value = '*'
        } else if (this.corn.minute.label === '2') {
          this.corn.minute.value = this.corn.minute.rangeStart + '-' + this.corn.minute.rangeEnd
        } else if (this.corn.minute.label === '3') {
          this.corn.minute.value = this.corn.minute.intervalStart + '/' + this.corn.minute.interval
        } else {
          let value = ''
          for (var i = 0; i < this.corn.minute.checked.length; i++) {
            value += this.corn.minute.checked[i]
            if (i < this.corn.minute.checked.length - 1) {
              value += ','
            }
          }
          this.corn.minute.value = value
        }
        return this.corn.minute.value
      },
      getHourValue() {
        if (this.corn.hour.label === '1') {
          this.corn.hour.value = '*'
        } else if (this.corn.hour.label === '2') {
          this.corn.hour.value = this.corn.hour.rangeStart + '-' + this.corn.hour.rangeEnd
        } else if (this.corn.hour.label === '3') {
          this.corn.hour.value = this.corn.hour.intervalStart + '/' + this.corn.hour.interval
        } else {
          let value = ''
          for (var i = 0; i < this.corn.hour.checked.length; i++) {
            value += this.corn.hour.checked[i]
            if (i < this.corn.hour.checked.length - 1) {
              value += ','
            }
          }
          this.corn.hour.value = value
        }
        return this.corn.hour.value
      },
      getDayOfMonthValue() {
        if (this.corn.dayOfMonth.label === '1') {
          this.corn.dayOfMonth.value = '*'
        } else if (this.corn.dayOfMonth.label === '2') {
          this.corn.dayOfMonth.value = '?'
        } else if (this.corn.dayOfMonth.label === '3') {
          this.corn.dayOfMonth.value = this.corn.dayOfMonth.rangeStart + '-' + this.corn.dayOfMonth.rangeEnd
        } else if (this.corn.dayOfMonth.label === '4') {
          this.corn.dayOfMonth.value = this.corn.dayOfMonth.intervalStart + '/' + this.corn.dayOfMonth.interval
        } else if (this.corn.dayOfMonth.label === '5') {
          this.corn.dayOfMonth.value = this.corn.dayOfMonth.lastest + 'W'
        } else if (this.corn.dayOfMonth.label === '6') {
          this.corn.dayOfMonth.value = 'L'
        } else {
          let value = ''
          for (var i = 0; i < this.corn.dayOfMonth.checked.length; i++) {
            value += this.corn.dayOfMonth.checked[i]
            if (i < this.corn.dayOfMonth.checked.length - 1) {
              value += ','
            }
          }
          this.corn.dayOfMonth.value = value
        }
        return this.corn.dayOfMonth.value
      },
      getMonthValue() {
        if (this.corn.month.label === '1') {
          this.corn.month.value = '*'
        } else if (this.corn.month.label === '2') {
          this.corn.month.value = '?'
        } else if (this.corn.month.label === '3') {
          this.corn.month.value = this.corn.month.rangeStart + '-' + this.corn.month.rangeEnd
        } else if (this.corn.month.label === '4') {
          this.corn.month.value = this.corn.month.intervalStart + '/' + this.corn.month.interval
        } else {
          let value = ''
          for (var i = 0; i < this.corn.month.checked.length; i++) {
            value += this.corn.month.checked[i]
            if (i < this.corn.month.checked.length - 1) {
              value += ','
            }
          }
          this.corn.month.value = value
        }
        return this.corn.month.value
      },
      getDayOfWeekValue() {
        if (this.corn.dayOfWeek.label === '1') {
          this.corn.dayOfWeek.value = '*'
        } else if (this.corn.dayOfWeek.label === '2') {
          this.corn.dayOfWeek.value = '?'
        } else if (this.corn.dayOfWeek.label === '3') {
          this.corn.dayOfWeek.value = this.corn.dayOfWeek.rangeStart + '-' + this.corn.dayOfWeek.rangeEnd
        } else if (this.corn.dayOfWeek.label === '4') {
          this.corn.dayOfWeek.value = this.corn.dayOfWeek.intervalStart + '#' + this.corn.dayOfWeek.interval
        } else if (this.corn.dayOfWeek.label === '5') {
          this.corn.dayOfWeek.value = this.corn.dayOfWeek.last + 'L'
        } else {
          let value = ''
          for (var i = 0; i < this.corn.dayOfWeek.checked.length; i++) {
            value += this.corn.dayOfWeek.checked[i]
            if (i < this.corn.dayOfWeek.checked.length - 1) {
              value += ','
            }
          }
          this.corn.dayOfWeek.value = value
        }
        return this.corn.dayOfWeek.value
      },
      getYearValue() {
        if (this.corn.year.label === '1') {
          this.corn.year.value = '*'
        } else if (this.corn.year.label === '2') {
          this.corn.year.value = this.corn.year.rangeStart + '-' + this.corn.year.rangeEnd
        } else if (this.corn.year.label === '3') {
          this.corn.year.value = this.corn.year.intervalStart + '/' + this.corn.year.interval
        }
        return this.corn.year.value
      },
      getExpression() {
        let second = this.getSecondValue
        let minute = this.getMinuteValue
        let hour = this.getHourValue
        let dayOfMonth = this.getDayOfMonthValue
        let month = this.getMonthValue
        let dayOfWeek = this.getDayOfWeekValue
        let year = this.getYearValue
        if (second === '') {
          this.$Message.error('秒不能为空值');
          return
        }
        if (minute === '') {
          this.$Message.error('分不能为空值');
          return
        }
        if (hour === '') {
          this.$Message.error('时不能为空值');
          return
        }
        if (dayOfMonth === '') {
          this.$Message.error('日不能为空值');
          return
        }
        if (month === '') {
          this.$Message.error('月不能为空值');
          return
        }
        if (dayOfWeek === '') {
          this.$Message.error('周不能为空值');
          return
        }
        if (year === '') {
          this.$Message.error('年不能为空值');
          return
        }
        return second + ' ' + minute + ' ' + hour + ' ' + dayOfMonth + ' ' + month + ' ' + dayOfWeek + ' ' + year}
    },
    methods: {
      handleReset(array) {
        array.splice(0, array.length)
      }
    }
  }
</script>

<style scoped>
  .item {
    width: 15%;
    margin-left: 5px;
    margin-right: 5px;
  }

  .weekItem {
    width: 30%;
    margin-left: 5px;
    margin-right: 5px;
  }

  .resetButton {
    border-bottom: 1px solid #e9e9e9;
    padding-bottom: 6px;
    margin-bottom: 6px;
  }
</style>
