export declare interface Flow {
  id: string
  name: string
  tags: string[]
}

export declare interface Deployment {
  id: string
  name: string
  location: string
  schedule: any
  parameters: { [key: string]: any }[]
  tags: string[]
}

export declare interface State {
  id: string
  type: string
  message: string
  state_details: { [key: string]: any }
  data: { [key: string]: any }
  timestamp: string
  name: string
}

export declare interface FlowRun {
  id: string
  deployment_id: string
  flow_id: string
  flow_version: string
  idempotency_key: string
  next_scheduled_start_time: string | null
  parameters: { [key: string]: any }
  auto_scheduled: boolean
  context: { [key: string]: any }
  emperical_config: { [key: string]: any }
  emperical_policy: { [key: string]: any }
  estimated_run_time: number
  estimated_start_time_delta: number
  total_run_time: number
  start_time: string
  end_time: string
  name: string
  parent_task_run_id: string
  state_id: string
  state_type: string
  state: State
  tags: string[]
  task_run_count: number
  updated: string
}

export declare interface TaskRun {
  id: string
  flow_run_id: string
  cache_expiration: string
  cache_key: string
  created: string
  dynamic_key: string
  emperical_policy: { [key: string]: any }
  estimated_run_time: number
  estimated_start_time_delta: number
  total_run_time: number
  expected_start_time: string
  next_scheduled_start_time: string | null
  run_count: number
  name: string
  task_unputs: { [key: string]: any }
  task_key: string
  task_version: string
  updated: string
  start_time: string
  end_time: string
  state_id: string
  state_type: string
  state: State
  duration: number
  sub_flow_run_id: string
  tags: string[]
}
