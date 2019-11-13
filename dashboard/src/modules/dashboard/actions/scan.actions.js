import { CALL_API } from "../../../actions/api.actions";

export const FETCH_SCAN_REQUEST = 'modules/dashboard/scans/FETCH_SCAN_REQUEST';
export const FETCH_SCAN_FAILED = 'modules/dashboard/scans/FETCH_SCAN_FAILED';
export const FETCH_SCAN_SUCCESS = 'modules/dashboard/scans/FETCH_SCAN_SUCCESS';

export const fetchScanById = scanId => ({
  type: CALL_API,
  types: [
    FETCH_SCAN_REQUEST,
    FETCH_SCAN_SUCCESS,
    FETCH_SCAN_FAILED,
  ],
  method: 'get',
  endPoint: `reports/${scanId}/status`,
});
