<template>
    <el-table
      :data="tableData"
      ref="tableData"
      stripe
      style="width: 100%"
      highlight-current-row
      @selection-change = "selectLine"
      >
      <!-- 多选框 -->
      <el-table-column
      v-if="selection"
      type="selection"
      width="55">
    </el-table-column>
    <template v-for = 'item in tableHead'>
      <el-table-column
        v-if="item.columnType === 'slot'"
        :prop="item.field"
        :label="item.label"
        :key="item.field"
        :width="item.width"
        :align= "align"
        >
        <template slot-scope="scope">
            <slot :name = item.slotName :data="scope"></slot>
          </template>
      </el-table-column>
      <el-table-column
      v-else
      :prop="item.field"
      :label="item.label"
      :key="item.field"
      :width="item.width"
      :align= "align"
      >
      </el-table-column>
    </template>
    </el-table>
</template>

<script>
export default {
  name: 'e-table',
  data () {
    return {

    }
  },
  components: {

  },
  props: {
    selection: {
      type: Boolean,
      default: false
    },
    tableHeadConfig: {
      type: Array,
      default: () => {
        return [
          {
            label: 'skuId',
            field: 'skuId'
          },
          {
            label: 'label1',
            field: 'skuName'
          },
          {
            label: 'label2',
            columnType: 'slot',
            slotName: 'thumbnail'
          },
          {
            label: 'label3',
            field: 'onStockNum'
          },
          {
            label: 'label4',
            field: 'hasUniCode'
          },
          {
            label: 'label5',
            field: 'status',
            columnType: 'slot',
            slotName: 'status'
          },
          {
            label: 'label6',
            columnType: 'slot',
            slotName: 'operation'
          }
        ]
      }
    },
    align: {
      type: String,
      default: 'center'
    },
    tableDataConfig: {
      type: Array,
      default: () => {
        return [
          {
            skuId: '111',
            skuName: '222'
          }
        ]
      }
    },
    height: {
      type: [Number, String],
      default: 600
    }
  },
  methods: {
    selectLine () {
      if (this.$refs.tableData.selection &&
            this.$refs.tableData.selection.length > 0
      ) {
        this.$emit('selectLine', this.$refs.tableData.selection)
      }
    }
  },
  computed: {
    tableHead () {
      return this.tableHeadConfig
    },
    tableData () {
      return this.tableDataConfig
    }
  }
}
</script>

<style>

</style>
