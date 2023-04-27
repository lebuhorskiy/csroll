<template>
  <div class="ui-timer">
    <vue-countdown-timer
        :start-time="'2018-10-10 00:00:00'"
        :end-time="endTime"
        :interval="1000"
        label-position="begin"
        :showDay="false"
        :showHour="false">
      <template slot="countdown" slot-scope="scope">
        <span>{{scope.props.minutes}}</span><i>{{scope.props.minutesTxt}}</i>
        <span>{{scope.props.seconds}}</span><i>{{scope.props.secondsTxt}}</i>
      </template>
    </vue-countdown-timer>
  </div>
</template>
<script>
export default {
  props: ['endTime']
}
</script>
<style scoped lang="scss">
  .ui-timer {
    ::v-deep {
      i:last-child {
        display: none !important;
      }
      i,span {
        font-weight: 700;
        font-size: 12px;
        line-height: 100%;
      }
    }
  }
</style>